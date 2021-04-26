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

function notFound(req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;

  next(err);
}

/*
This will handle mongoose validation errors - they can be identified by having an errors property.
*/

function validation(err, req, res, next) {
  if (!err.errors) return next(err);

  return res.status(400).json(err.errors);
}


/*
This next one ensure that we don't leak error stack traces to the user
*/

function production(err, req, res, next) {
  const error = process.env.NODE_ENV === 'production' ? {} : err;
  const status = err.status || 500;

  res.status(status).json({ error });
}

module.exports = {
  catchAsyncErrors,
  notFound,
  validation,
  production
};