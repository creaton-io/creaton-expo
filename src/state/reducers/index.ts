import { combineReducers } from 'redux';
import testReducer from './testReducer';

const reducers = combineReducers({
  test: testReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
