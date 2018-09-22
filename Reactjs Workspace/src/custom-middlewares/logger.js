export default (store) => (next) => (action) => {
    console.log('From inside of logger middleware:');
    console.log('Action is', action);
    console.log('Store contains:', store);
    next(action); // important! if not called, reducer will not receive the action
}

// redux calls this logger by supplying the reference to the store
function logger(store) {
    // we return this function, which is again called by redux, by passing
    // the reference to the next available middleware, or the reducer
    return function (next) {

        // we have to call next() so that, the next middleware or reducer
        // is invoked; if not, the reducer is never invoked, and the state
        // is not changed, 
        return function (action) {

        }
    }
}