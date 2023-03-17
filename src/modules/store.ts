import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import global from './global';

const reducer = combineReducers({ global });

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
  更新state的唯一方法就是调用store.dispatch()并传入一个action对象
  store将执行所有的reducer函数并计算出更新后的state，调用getState()可以获取新的state。
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
/** 
  useSelector是React-Redux中的自定义hook，它使得React组件可以从Redux store中读取数据
  useSelector接收一个selector函数，selector函数接收Redux store的state作为其参数，然后从
  state中取值并返回
*/

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
