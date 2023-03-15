import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const namespace = 'global';

export const selectGlobal = (state: RootState) => state.global;

export interface IGlobalState {
  setting: boolean;
}

const initialState: IGlobalState = {
  setting: false,
};

// 创建带有命名空间的reducer
const globalSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    toggleSetting: (state) => {
      state.setting = !state.setting;
    },
  },
});

export default globalSlice.reducer;
