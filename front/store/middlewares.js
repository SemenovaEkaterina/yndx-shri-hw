import { Middleware } from 'yndx-shri-hw-redux';
import { GET_LIST, setList } from './actions';
import config from 'front/config.json';

const getList = async (state, dispatch, action) => {
    if (state.list) {
        dispatch(setList(state.list));
    } else {
        const response = await fetch(`${config.apiUrl}repos/${action.repo}`);
        const data = await response.json();

        dispatch(setList(data.list));
    }
};

export default [new Middleware(getList, GET_LIST)];