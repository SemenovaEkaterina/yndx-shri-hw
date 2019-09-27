import store from '../store';
import {getList} from '../store/actions';
import Files from './files';
import Search from "./search";

const files = document.getElementById('files');
const search = document.getElementById('search');

new Files(files, store, ['list', 'status'], {getList});
new Search(search, store, ['search'], {getList});