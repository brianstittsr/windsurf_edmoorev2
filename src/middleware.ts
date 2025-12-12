// Middleware disabled - using server-side i18n without locale routing
// import createMiddleware from 'next-intl/middleware';

export function middleware() {
  // Pass through - no locale routing needed
}

export const config = {
  // Don't match any routes - effectively disabling middleware
  matcher: []
};
