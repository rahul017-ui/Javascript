#### ASYNC FUNCTIONS
*async functions always return a promise.
*if the function returns a value,the promise will be resolved with that value.
*if the function throws an exception,the promise will be rejected.

### AWAIT
*we can only use the await keyword inside of functions declared with async.
*await will pause the execution of the function,waiting for a promise to be resolved.