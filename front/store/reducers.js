import {ListStatus} from "./types";
import {GET_LIST, SET_LIST} from "./actions";

const defaultState = {
    status: ListStatus.INITIAL,
};

function reducer(state = defaultState, action = {}) {
    if (action.type === GET_LIST) {
        return Object.assign({}, {
                status: ListStatus.LOADING,
                list: state.list,
                search: action.search,
            }
        )
    }
    if (action.type === SET_LIST) {
        return Object.assign({}, {
                status: ListStatus.SUCCESS,
                list: action.list,
                search: state.search
            }
        )
    }
    return state;
}

export default reducer;