import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

export default combineReducers({
  monitor: contactReducer,
});
