/**
 * Middleware for handling requests and errors
 */

/**
 * Safely converts any error to a proper Error object
 * @param {unknown} error - The error to convert
 * @returns {Error} A proper Error object
 */
function ensureError(error) {
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

export function onRequest({ request, locals }, next) {
  try {
    // Process the request through the next middleware
    return next();
  } catch (error) {
    // Convert any error to a proper Error object
    const errorObj = ensureError(error);
    
    // Log the error
    console.error(`[Middleware] Error: ${errorObj.message}`);
    if (errorObj.stack) {
      console.error(errorObj.stack);
    }
    
    // Get the URL for redirection
    const url = new URL('/error', request.url);
    url.searchParams.set('status', errorObj.status || 500);
    url.searchParams.set('message', encodeURIComponent(errorObj.message || 'An unexpected error occurred'));
    
    // Redirect to error page
    return Response.redirect(url.toString(), 302);
  }
}