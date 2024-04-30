import { combineReducers } from 'redux';

import listReducer from './movieReducer';

export const rootReducer = combineReducers({
  list: listReducer,
});

// RootState[type]
export type ReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
