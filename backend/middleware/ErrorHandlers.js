/*
This will catch any errors that are thrown by an async function, so we can avoid writing try catch in every async function like database queries.
*/

function catchAsyncErrors(fn) {
  return function (req, res, next) {
    return fn(req, res, next)
      .catch(err => next(err));
  }
}

/*
If we don't find a route we create an error and pass it on to the middleware chain for handling. We will add this immediately after the routing middleware.
*/

function notFoundHandler(req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;

  next(err);
}

module.exports = {
  catchAsyncErrors,
  notFoundHandler,
};