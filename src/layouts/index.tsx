import React, { memo } from 'react';
import { Drawer, Layout } from 'tdesign-react';
import { useAppSelector } from 'modules/store';
import { selectGlobal, ELayout } from 'modules/global';
import AppLayout from './components/AppLayout';
import Style from './index.module.less';

export default memo(() => {
  const globalState = useAppSelector(selectGlobal);

  const AppContainer = AppLayout[globalState.isFullPage ? ELayout.fullPage : globalState.layout];
  return (
    <Layout className={Style.panel}>
      <AppContainer />
      <Drawer visible={globalState.setting}></Drawer>
    </Layout>
  );
});
