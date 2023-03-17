import { createSlice } from '@reduxjs/toolkit';
import { ETheme } from 'types/index.d';
import { RootState } from '../store';

const namespace = 'global';

export enum ELayout {
  side = 1,
  fullPage,
}
export interface IGlobalState {
  layout: ELayout;
  setting: boolean;
  isFullPage: boolean;
  showFooter: boolean;
  showBreadcrumbs: boolean;
  theme: ETheme;
}

const defaultTheme = ETheme.light;

const initialState: IGlobalState = {
  layout: ELayout.side,
  setting: false,
  isFullPage: false,
  showFooter: true,
  showBreadcrumbs: true,
  theme: defaultTheme,
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

export const selectGlobal = (state: RootState) => state.global;

export const { switchFullPage } = globalSlice.actions;

export default globalSlice.reducer;
