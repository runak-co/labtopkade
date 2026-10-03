/**
 * Global API and Data Source Configuration.
 * 
 * To switch from Mock Data to the live Spring Boot Backend:
 * Change `USE_MOCK_DATA` to `false` and ensure `API_BASE_URL` points to your backend.
 */
export const API_CONFIG = {
  USE_MOCK_DATA: true,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost/api',
  TIMEOUT_MS: 10000,
  REVALIDATE_SECONDS: 60,
};
