import {combineReducers} from 'redux';
import entries from './entries';
import user from './user';
import auth from './auth';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  entries,
  user,
  auth,
  form: formReducer
});

export default rootReducer;
