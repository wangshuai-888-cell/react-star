import { ELayout } from 'modules/global';
import { Layout } from 'tdesign-react';
import Footer from './Footer';
import React from 'react';
import Content from './AppRouter';

const SideLayout = React.memo(() => (
  <Layout>
    <Layout>
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