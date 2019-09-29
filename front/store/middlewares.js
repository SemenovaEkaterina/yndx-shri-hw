export const logger = (store) => (dispatch) => (action) => {
    console.log(`REDUX: ${action.type}`);
    return dispatch(action);
};

export const asyncAction = (store) => (dispatch) => (action) => {
    if (typeof action === 'function') {
        return action(store, dispatch);
    } else {
        return dispatch(action);
    }
};