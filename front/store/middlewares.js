import { Middleware } from 'yndx-shri-hw-redux';
import { GET_LIST, setList } from './actions';

const getList = async (state, dispatch, action) => {
    if (state.list) {
        return;
    }

    const response = await fetch('http://localhost:3003/api/repos/promise-polyfill');
    const data = await response.json();

    dispatch(setList(data.list));
};

export default [new Middleware(getList, GET_LIST)];