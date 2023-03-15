import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import global from './global';

const reducer = combineReducers({ global });

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
