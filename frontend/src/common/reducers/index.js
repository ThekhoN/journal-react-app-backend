import {combineReducers} from 'redux';
import entries from './entries';
import user from './user';
import auth from './auth';

const rootReducer = combineReducers({
  entries,
  user,
  auth
});

export default rootReducer;
