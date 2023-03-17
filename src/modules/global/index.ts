import { createSlice } from '@reduxjs/toolkit';
import { ETheme } from 'types/index.d';
import { RootState } from '../store';

const namespace = 'global';

export enum ELayout {
  side = 1,
  fullPage,
}
export interface IGlobalState {
  collapsed: boolean;
  layout: ELayout;
  setting: boolean;
  isFullPage: boolean;
  showHeader: boolean;
  showFooter: boolean;
  showBreadcrumbs: boolean;
  theme: ETheme;
}

const defaultTheme = ETheme.light;

const initialState: IGlobalState = {
  collapsed: window.innerWidth < 1000, // 宽度小于1000 菜单闭合
  layout: ELayout.side,
  setting: false,
  isFullPage: false,
  showHeader: true,
  showFooter: true,
  showBreadcrumbs: true,
  theme: defaultTheme,
};

// 创建带有命名空间的reducer
const globalSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      if (action.payload === null) {
        state.collapsed = !state.collapsed;
      } else {
        state.collapsed = !!action.payload;
      }
    },
    toggleSetting: (state) => {
      state.setting = !state.setting;
    },
    switchFullPage: (state, action) => {
      state.isFullPage = !!action?.payload;
    },
  },
});

export const selectGlobal = (state: RootState) => state.global;

export const { toggleMenu, toggleSetting, switchFullPage } = globalSlice.actions;

export default globalSlice.reducer;
