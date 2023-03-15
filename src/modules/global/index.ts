import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const namespace = 'global';

export enum ELayout {
  side = 1,
  fullPage,
}

export const selectGlobal = (state: RootState) => state.global;

export interface IGlobalState {
  layout: ELayout;
  setting: boolean;
  isFullPage: boolean;
  showFooter: boolean;
  showBreadcrumbs: boolean;
}

const initialState: IGlobalState = {
  layout: ELayout.side,
  setting: false,
  isFullPage: false,
  showFooter: true,
  showBreadcrumbs: true,
};

// 创建带有命名空间的reducer
const globalSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    toggleSetting: (state) => {
      state.setting = !state.setting;
    },
    switchFullPage: (state, action) => {
      state.isFullPage = !!action?.payload;
    },
  },
});

export const { switchFullPage } = globalSlice.actions;

export default globalSlice.reducer;
