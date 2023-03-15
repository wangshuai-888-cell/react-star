import React, { memo } from 'react';
import { Drawer, Layout } from 'tdesign-react';
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';
import Style from './index.module.less';

export default memo(() => {
  const globalState = useAppSelector(selectGlobal);
  return (
    <Layout className={Style.panel}>
      <Drawer visible={globalState.setting}></Drawer>
    </Layout>
  );
});
