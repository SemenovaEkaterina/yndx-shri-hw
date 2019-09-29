import config from "../../config";

const GET_LIST = 'GET_LIST';
const SET_LIST = 'SET_LIST';

const getList = (repo, search) => ({
    repo,
    search,
    type: GET_LIST,
});

const setList = (list) => ({
    list,
    type: SET_LIST,
});

const fetchList = (data) => {
    const { repo, search } = data;
    return async (store, dispatch) => {
        const current = store.getState().list;
        dispatch(getList(repo, search));
        let list;
        if (!current) {
            const response = await fetch(`${config.apiUrl}repos/${repo}`);
            list = (await response.json()).list;

        } else {
            list = current;
        }
        dispatch(setList(list));
    }
};

export default { GET_LIST, SET_LIST, getList, setList, fetchList};