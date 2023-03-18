import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import login from './modules/login';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  isFullPage?: boolean;
  meta?: {
    title?: string;
    Icon?: React.FC;
    hidden?: boolean;
    single?: boolean;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    redirect: '/login',
  },
];

const allRoutes = [...routes, ...login];
export default allRoutes;
