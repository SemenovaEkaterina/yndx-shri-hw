import {ListStatus} from "./types";
import {GET_LIST, SET_LIST} from "./actions";

const defaultState = {
    status: ListStatus.INITIAL,
};

function reducer(state = defaultState, action = {}) {
    if (action.type === GET_LIST) {
        return Object.assign({}, {
                status: ListStatus.LOADING,
                search: action.search,
            }
        )
    }
    if (action.type === SET_LIST) {
        return Object.assign({}, {
                status: ListStatus.SUCCESS,
                list: action.list,
            }
        )
    }
    return state;
}

export default reducer;