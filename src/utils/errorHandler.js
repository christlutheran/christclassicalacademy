/**
 * Utility functions for error handling
 */

/**
 * Safely converts any error to a proper Error object
 * @param {unknown} error - The error to convert
 * @returns {Error} A proper Error object
 */
export function ensureError(error) {
  if (error instanceof Error) {
    return error;
  }
  
  // Convert string errors to Error objects
  if (typeof error === 'string') {
    return new Error(error);
  }
  
  // Handle other types of errors
  try {
    const errorMessage = JSON.stringify(error);
    return new Error(errorMessage);
  } catch (e) {
    // If all else fails, return a generic error
    return new Error('Unknown error occurred');
  }
}

/**
 * Logs an error with additional context
 * @param {unknown} error - The error to log
 * @param {string} context - Additional context about where the error occurred
 */
export function logError(error, context = '') {
  const errorObj = ensureError(error);
  const contextPrefix = context ? `[${context}] ` : '';
  console.error(`${contextPrefix}Error: ${errorObj.message}`);
  
  if (errorObj.stack) {
    console.error(errorObj.stack);
  }
}

/**
 * Creates a standardized error response
 * @param {number} status - HTTP status code
 * @param {string} message - Error message
 * @returns {Object} Error response object
 */
export function createErrorResponse(status = 500, message = 'An unexpected error occurred') {
  return {
    status,
    message,
    timestamp: new Date().toISOString()
  };
}

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
      return errorHandler(ensureError(error), ...args);
    }
  };
}