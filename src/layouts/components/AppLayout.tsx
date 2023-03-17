import { ELayout } from 'modules/global';
import { Layout } from 'tdesign-react';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import Content from './AppRouter';
import classnames from 'classnames';
import Style from './AppLayout.module.less';

const SideLayout = React.memo(() => (
  <Layout className={classnames(Style.sidePanel, 'narrow-scrollbar')}>
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </Layout>
));

const FullPageLayout = React.memo(() => <Content />);

export default {
  [ELayout.side]: SideLayout,
  [ELayout.fullPage]: FullPageLayout,
}