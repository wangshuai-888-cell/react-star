import { selectGlobal, toggleMenu } from 'modules/global';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { ViewListIcon } from 'tdesign-icons-react';
import React, { memo } from 'react';
import { Layout, Space, Button } from 'tdesign-react';
import { HeaderMenu } from '../Menu';

const { Header } = Layout;

export default memo((props: { showMenu?: boolean }) => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  if (!globalState.showHeader) {
    return null;
  }

  let HeaderLeft;
  if (props.showMenu) {
    HeaderLeft = (
      <div>
        <HeaderMenu />
      </div>
    );
  } else {
    HeaderLeft = (
      <Space align='center'>
        <Button
          shape='square'
          size='large'
          variant='text'
          onClick={() => dispatch(toggleMenu(null))}
          icon={<ViewListIcon />}
        ></Button>
      </Space>
    );
  }
  return <Header>{HeaderLeft}</Header>;
});
