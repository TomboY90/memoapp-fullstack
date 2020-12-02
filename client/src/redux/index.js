import { combineReducers } from 'redux';

import auth from './auth';
import memo from './memo';
import ui from './ui';

export default combineReducers({
  auth,
  memo,
  ui,
});