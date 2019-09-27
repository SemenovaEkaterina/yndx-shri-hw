import { Store } from 'yndx-shri-hw-redux';
import reducer  from './reducers';
import middlewares  from './middlewares';

export default new Store(reducer, middlewares);

