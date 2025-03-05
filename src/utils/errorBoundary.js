/**
 * Error boundary utility for handling errors in components
 */

/**
 * Wraps a function with error handling
 * @param {Function} fn - The function to wrap
 * @param {Function} errorHandler - The error handler function
 * @returns {Function} The wrapped function
 */
export function withErrorHandling(fn, errorHandler) {
  return async function(...args) {
    try {
      return await fn(...args);
    } catch (error) {
      return errorHandler(error, ...args);
    }
  };
}

/**
 * Creates a safe version of a component that catches errors
 * @param {Component} Component - The component to wrap
 * @param {Component} FallbackComponent - The component to render on error
 * @returns {Component} The wrapped component
 */
export function createErrorBoundary(Component, FallbackComponent) {
  return function ErrorBoundary(props) {
    try {
      return Component(props);
    } catch (error) {
      return FallbackComponent({ error, ...props });
    }
  };
}