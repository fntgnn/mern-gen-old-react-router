import { combineReducers } from 'redux';
import someActionsReducer from './some_actions_reducer';

const rootReducer = combineReducers({
  data: someActionsReducer
});

export default rootReducer;
