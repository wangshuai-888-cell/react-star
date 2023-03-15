import React, { memo, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routers, { IRouter } from 'router';
import { Loading, Layout } from 'tdesign-react';
import Page from './Page';
import Style from './AppRouter.module.less';
import { resolve } from 'utils/path';

const { Content } = Layout;

type TRenderRoutes = (routes: IRouter[], parentPath?: string, breadcrumbs?: string[]) => React.ReactNode[];

const renderRoutes: TRenderRoutes = (routes, parentPath = '', breadcrumb = []) =>
  routes.map((route, index: number) => {
    const { Component, children, redirect, meta } = route;
    const currentPath = resolve(parentPath, route.path);
    let currentBreadcrumb = breadcrumb;

    if (meta?.title) {
      currentBreadcrumb = currentBreadcrumb.concat([meta?.title]);
    }

    if (redirect) {
      // 重定向
      return <Route key={index} path={currentPath} element={<Navigate to={redirect} replace />} />;
    }

    if (Component) {
      // 有路由菜单
      return (
        <Route
          key={index}
          path={currentPath}
          element={
            <Page isFullPage={route.isFullPage} breadcrumbs={currentBreadcrumb}>
              <Component />
            </Page>
          }
        />
      );
    }
    // 无路由菜单
    return children ? renderRoutes(children, currentPath, currentBreadcrumb) : null;
  });

const AppRouter = () => (
  <Content>
    <Suspense
      fallback={
        <div className={Style.loading}>
          <Loading />
        </div>
      }
    >
      <Routes>{renderRoutes(routers)}</Routes>
    </Suspense>
  </Content>
);

export default memo(AppRouter);
