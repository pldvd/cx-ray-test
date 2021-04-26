/*
This will catch any errors that are thrown by an async function, so we can avoid writing try catch in every async function like database queries
*/

function catchAsyncErrors(fn) {
  return function (req, res, next) {
    return fn(req, res, next)
      .catch(err => next(err));
  }
}

module.exports = {
  catchAsyncErrors
}