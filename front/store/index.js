import { Store, combineReducers } from 'yndx-shri-hw-redux';
import filesReducer  from './files/reducers';
import {logger, asyncAction}  from './middlewares';

export default new Store(combineReducers({files: filesReducer}), [logger, asyncAction]);

