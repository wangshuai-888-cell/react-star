import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ETheme } from 'types/index.d';
import { RootState } from '../store';
import { CHART_COLORS } from 'configs/color';
import { version } from '../../../package.json';

const namespace = 'global';

export enum ELayout {
  side = 1,
  top,
  mix,
  fullPage,
}
export interface IGlobalState {
  systemTheme: boolean;
  collapsed: boolean;
  layout: ELayout;
  setting: boolean;
  isFullPage: boolean;
  version: string;
  showHeader: boolean;
  showFooter: boolean;
  showBreadcrumbs: boolean;
  theme: ETheme;
  chartColors: Record<string, string>;
}

const defaultTheme = ETheme.light;

const initialState: IGlobalState = {
  systemTheme: false,
  collapsed: window.innerWidth < 1000, // 宽度小于1000 菜单闭合
  layout: ELayout.side,
  setting: false,
  version,
  isFullPage: false,
  showHeader: true,
  showFooter: true,
  showBreadcrumbs: true,
  theme: defaultTheme,
  chartColors: CHART_COLORS[defaultTheme],
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
    switchTheme: (state, action: PayloadAction<ETheme>) => {
      const finalTheme = action?.payload;
      // 切换 chart 颜色
      state.chartColors = CHART_COLORS[finalTheme];
      // 切换主题颜色
      state.theme = finalTheme;
      // 关闭跟随系统
      state.systemTheme = false;
      document.documentElement.setAttribute('theme-mode', finalTheme);
    },
  },
});

export const selectGlobal = (state: RootState) => state.global;

export const { toggleMenu, toggleSetting, switchFullPage, switchTheme } = globalSlice.actions;

export default globalSlice.reducer;
