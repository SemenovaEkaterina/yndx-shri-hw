import store from '../store';
import actions from '../store/files/actions';
import Files from './files';
import Search from "./search";

const files = document.getElementById('files');
const search = document.getElementById('search');

if (files) {
    new Files(files, store, (state) => ({
        list: state.files.list,
        status: state.files.status,
        search: state.files.search
    }), {fetchList: actions.fetchList});
}
if (search) {
    new Search(search, store, () => {
    }, {fetchList: actions.fetchList});
}
