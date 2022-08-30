import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cryptoReducer from './cryptoData.redux';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
  middleware: [thunk],
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
