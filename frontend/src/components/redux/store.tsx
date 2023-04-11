import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import sessionReducer from './sessionSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  // session: sessionReducer,
  user: userReducer,
});

const persistConfig: any = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
