import React, { memo, useEffect } from 'react';
import { Layout } from 'tdesign-react';
import throttle from 'lodash/throttle';
import { useAppSelector, useAppDispatch } from 'modules/store';
import { selectGlobal, toggleMenu, ELayout, switchTheme } from 'modules/global';
import AppLayout from './components/AppLayout';
import Style from './index.module.less';

/* memo
父组件的每次状态更新，都会导致子组件重新渲染，即使传入子组件的状态没发生变化，为了减少重复渲染，我们可以使用
React.memo来缓存组件，这样只有当传入组件的状态值发生变化时才会重新渲染
注意：对props值的比较为浅比较
 */

export default memo(() => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  const AppContainer = AppLayout[globalState.isFullPage ? ELayout.fullPage : globalState.layout];

  useEffect(() => {
    dispatch(switchTheme(globalState.theme));
    const handleResize = throttle(() => {
      if (window.innerWidth < 900) {
        dispatch(toggleMenu(true));
      } else if (window.innerWidth > 1000) {
        dispatch(toggleMenu(false));
      }
    }, 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout className={Style.panel}>
      <AppContainer />
    </Layout>
  );
});
