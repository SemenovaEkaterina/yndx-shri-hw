const GET_LIST = 'GET_LIST';
const SET_LIST = 'SET_LIST';

const getList = (search) => ({
    search,
    type: GET_LIST,
});

const setList = (list) => ({
    list,
    type: SET_LIST,
});

export { GET_LIST, SET_LIST, getList, setList};