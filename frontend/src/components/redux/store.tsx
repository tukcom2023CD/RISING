import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sessionReducer from './sessionSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  session: sessionReducer,
  userEmail: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;