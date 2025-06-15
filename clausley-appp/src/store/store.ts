import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userslice';

const rootReducer = combineReducers({
  user: userReducer,
});

export const setupStore = (preloadedState?: any) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];