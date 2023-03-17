import React, { memo } from 'react';
import { selectGlobal } from 'modules/global';
import { Layout } from 'tdesign-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { HeaderMenu } from '../Menu';

const { Header } = Layout;

export default memo((props: { showMenu?: boolean }) => {
  let HeaderLeft;
  if (props.showMenu) {
    HeaderLeft = (
      <div>
        <HeaderMenu />
      </div>
    );
  }
  return <Header>{HeaderLeft}</Header>;
});
