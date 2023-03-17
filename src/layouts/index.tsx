import React, { memo } from 'react';
import { Drawer, Layout } from 'tdesign-react';
import { useAppSelector } from 'modules/store';
import { selectGlobal, ELayout } from 'modules/global';
import AppLayout from './components/AppLayout';
import Style from './index.module.less';

/* memo
父组件的每次状态更新，都会导致子组件重新渲染，即使传入子组件的状态没发生变化，为了减少重复渲染，我们可以使用
React.memo来缓存组件，这样只有当传入组件的状态值发生变化时才会重新渲染
注意：对props值的比较为浅比较
 */

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
