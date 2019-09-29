import {ListStatus} from "./types";
import actions from "./actions";

const defaultState = {
    status: ListStatus.INITIAL,
};

function reducer(state = defaultState, action = {}) {
    if (action.type === actions.GET_LIST) {
        return {
            status: ListStatus.LOADING,
            search: action.search,
        }
    }
    if (action.type === actions.SET_LIST) {
        return {
            status: ListStatus.SUCCESS,
            list: action.list,
        }
    }
    return state;
}

export default reducer;