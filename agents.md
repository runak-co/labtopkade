## ⭐ Session start: enable **caveman** + **RTK** first

Every agent session in this workspace **starts** by enabling these two plugins.
Do this before other work. Chat replies stay caveman-terse **and English**;
shell/tool output gets compressed. Code, commands, and error strings stay exact.

1. **Caveman** — terse chat. Read and follow the caveman skill (`/caveman`, default **full**). Stay on until the user says `stop caveman` / `normal mode`.
   - Plugin / skill: [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)
2. **RTK (Rust Token Killer)** — compact bash output. Prefer `rtk <cmd>` (or the Cursor hook rewrite) for `git`, `ls`, `rg`/`grep`, tests, builds, logs. Prefer shell `cat`/`rg`/`find` (or `rtk read` / `rtk grep` / `rtk find`) over IDE Read/Grep/Glob when listing or searching so RTK can filter.
   - Plugin / CLI: [rtk-ai/rtk](https://github.com/rtk-ai/rtk)

If a plugin is missing, say so in one line and keep working. Do not skip this
step because the last turn already used them.

---

## Language — English only (non-negotiable)

The user may write in English, Persian, or any other language. **You still write
English.** Do not switch to match the user.

Apply this to **everything you produce**:

- Chat replies
- Code comments
- Markdown files you create or edit (`agents.md`, `docs/`, `openspec/`, PRs, notes)
- Commit messages, design notes, explanations, error write-ups

Quoted product UI strings, existing Persian copy in the apps, and domain terms
already in the product (RD, PD, سودا) stay as they are. Do **not** translate the
product. Surrounding prose you write is still English.

---

# agents.md — Engineering Charter for AI Agents

This file is the primary operating contract for any AI agent (and human) working in this
monorepo. Read it fully before writing code. It defines **how** we build, not **what** the
product does (for product/domain, see `docs/` and `openspec/`).

---

## 0. Prime Directive — KISS is the top technical OKR

> **Keep It Simple. Simplicity is the objective, not a nice-to-have.**

KISS is the single most important **engineering** OKR of this codebase. It outranks
cleverness, premature abstraction, "future-proofing", and personal style. When two
solutions both satisfy the requirement, **choose the one a new engineer understands fastest.**

KISS applies to *code and development process* — **not** to product content, domain
requirements, or analysis correctness. Never simplify away a real requirement, a security
control, or a correctness guarantee. Simplify the *implementation* that delivers them.

**Operational rules for KISS**

- Solve the problem in front of you. Do **not** build for imagined future needs (YAGNI).
- Prefer boring, obvious code over frameworks and indirection. No pattern for its own sake.
- The smallest diff that fully and correctly solves the task wins.
- Fewer moving parts > more configurability. Delete before you add.
- If you must add complexity, it must be **localized, justified in the PR/commit, and covered
  by a test**. Complexity without a written reason is a defect.
- No speculative config flags, no "just in case" parameters, no dead abstraction layers.

**KISS self-check before every change (must pass all):**

1. Can I explain this change in one or two plain sentences?
2. Is there a shorter/simpler version that still meets the requirement and the quality bar below?
3. Am I adding an abstraction that has exactly one caller? (If yes, inline it.)
4. Am I introducing a dependency or layer I can avoid? (If yes, avoid it.)

---

## 1. Quality bar (applied *within* KISS, in this priority order)

KISS is the goal. The following are the **means** to keep it simple *without* becoming
sloppy. They are subordinate to KISS: never use "Clean Architecture" or "SOLID" as an excuse
to add layers the task doesn't need.

### 1.1 Clean Architecture (pragmatic, not dogmatic)
- Dependencies point inward: `domain` knows nothing about `web`, `persistence`, or frameworks.
- Keep the layering the codebase already uses. Do not invent new layers.

  Backend layers (Spring Boot — `ir.mcq.analize.gozaresh`):
  - `domain/` — pure Java model + enums. No Spring, no JDBC, no I/O.
  - `service/` — business rules / use cases. Orchestrates domain + repositories.
  - `persistence/` — repositories + storage (JDBC/SQLite, files). No business rules.
  - `api/` — controllers + request/response records (DTOs). Thin. No business logic.
  - `config/` — wiring, properties, beans only.
- Controllers stay thin: validate input, call a service, map to a DTO. Nothing else.
- Business decisions live in `service/`, never in controllers or repositories.

### 1.2 Clean Code
- Names say intent. No abbreviations that aren't already domain terms (RD, PD, سودا are fine).
- Small functions, one job each. If you scroll to understand a method, split it.
- No dead code, no commented-out code, no unused params. Delete it.
- **Comments explain *why*, never *what*.** Do not narrate the code. The code is the *what*.
- Fail loud and early: validate at boundaries, throw meaningful errors, never swallow
  exceptions silently. `catch (Exception ignored) {}` is banned unless justified in a comment.
- No magic numbers/strings in logic — name them (constants or config).

### 1.3 SOLID (as guardrails, not as a checklist to inflate design)
- **S** — one reason to change per class. A service that does auth *and* billing is two classes.
- **O** — extend via new types/methods, not by editing stable core logic in risky ways.
- **L** — subtypes/implementations honor their contract; no surprise behavior.
- **I** — small, focused interfaces. Don't force callers to depend on methods they don't use.
- **D** — depend on abstractions at real seams (e.g. a repository interface), **only where a
  seam actually exists**. Do **not** introduce an interface with a single implementation just
  to "follow SOLID" — that violates KISS. Add the seam when a second implementation or a test
  double genuinely needs it.

> Tie-breaker: **If SOLID/Clean-Architecture guidance pushes you toward more layers,
> interfaces, or indirection than the task needs, KISS wins. Keep it simple.**

---

## 2. Repo map (where things live)

Monorepo — offline/online exam analyze with an RD/PD trust split.

- `mcq-analize-gozaresh-backend/` — **Spring Boot** analyze engine + jobs API (primary backend).
- `mcq-analize-gozaresh-frontend/` — Flutter Web SaaS (operator upload / سودا / download PD).
- `exam-analyze-viewer/` — Flutter desktop offline viewer (Persian RTL).
- `question-extracter-flutter/` — Flutter question-crop tool (offline only).
- `docs/` — product flow, file formats, architecture, glossary (domain source of truth).
- `openspec/` — spec-driven change workflow (see §4).

Domain vocabulary lives in `docs/GLOSSARY.md`. Reuse those exact terms (RD, PD, Operator, سودا).

---

## 3. Backend conventions (Spring Boot / Java 21)

- Java 21, Spring Boot 3.4.x, SQLite via `spring-boot-starter-jdbc` (`JdbcTemplate`), Maven.
- Persistence is **SQLite** with `schema.sql` run on startup (`spring.sql.init`). Schema must be
  **idempotent** (`CREATE TABLE IF NOT EXISTS`, `INSERT OR IGNORE`) so restarts never corrupt data.
- **State of record is the database + files, not in-memory maps.** In-memory maps may exist only
  as a cache that is fully rebuildable from the DB; they must never be the sole source of truth
  for anything a user can see across requests. (This rule exists because per-request/refresh
  behavior must be deterministic and multi-user safe.)
- Any user-visible resource (jobs, balances, uploads) MUST be **scoped to its owner** at the query
  layer. Never rely on the client to filter. Never return another tenant's data.
- Money/quota mutations (سودا debit/credit) go through **one** service, are transactional, and
  always write a ledger row. No ad-hoc balance edits.
- Controllers use small request/response `record` DTOs. Do not leak persistence rows or domain
  mutability across the API boundary.
- Prefer constructor injection. No field injection.

### 3.1 Auth & sessions (must be production-shaped)
- No hardcoded/static tokens in `schema.sql` or source. Tokens are **issued at login**, opaque,
  random, and **persisted** (a real session/token store), with an owner and an expiry.
- Passwords are **never** stored or compared in plaintext. Hash + verify.
- Token validation looks up the live session store every request; logout invalidates it.
- Authorization is role-checked server-side per endpoint (e.g. staff/admin vs operator). The
  client role is a hint for UI only and is never trusted for access decisions.

### 3.2 Tests
- Golden/parity tests around the analysis engine are **contracts** — do not change expected
  outputs to make a test pass. If output must change, that's a spec change (see §4) with a reason.
- New behavior gets a test at the level it lives (service test for rules, controller test for the
  HTTP contract). Keep tests simple and deterministic (no real sleeps, no wall-clock waits).

---

## 4. OpenSpec workflow (spec-driven — follow it)

This repo uses OpenSpec (`openspec/`, config `openspec/config.yaml`, CLI `openspec`).

- **Non-trivial change → propose first.** Create a change under `openspec/changes/<kebab-name>/`
  with `proposal.md`, `design.md`, `tasks.md`, and spec deltas, *before* large implementation.
- Specs use **Given / When / Then** scenarios in English. Quote existing Persian
  UI strings verbatim when a scenario is about operator-facing copy.
- Implement against the tasks; keep `tasks.md` checkboxes honest and up to date.
- Archive the change when done. Don't edit archived/baseline specs to match hacks — change the spec.

---

## 5. Definition of Done (every change)

- [ ] Meets the requirement and the KISS self-check (§0) — smallest correct diff.
- [ ] Respects layering (§1.1) and Clean Code (§1.2); no new needless abstraction/indirection.
- [ ] User-visible data is owner-scoped; no cross-tenant leakage (§3).
- [ ] No secrets, hardcoded tokens, or plaintext passwords added (§3.1).
- [ ] Build passes and relevant tests pass; new behavior is tested (§3.2).
- [ ] No dead code, no commented-out blocks, no "what" comments.
- [ ] If any complexity was added, the reason is written in the commit/PR.

---

## 6. Hard "don'ts"

- Don't make product/domain simplifications that drop a real requirement (KISS is for *code*).
- Don't store the source of truth for user-visible state in memory only.
- Don't return global/shared data where per-user/per-tenant data is required.
- Don't add hardcoded tokens, plaintext passwords, or bypass auth for convenience.
- Don't introduce an interface/factory/layer with a single trivial implementation "for later".
- Don't silently swallow exceptions.
- Don't change golden/spec expectations to force a green test.
- Don't reply, comment, or author markdown in a non-English language (see Language).
