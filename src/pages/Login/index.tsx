import { selectGlobal } from 'modules/global';
import classNames from 'classnames';
import { useAppSelector } from 'modules/store';
import React, { memo, useState } from 'react';
import LoginHeader from './components/Header';

import Style from './index.module.less';

export default memo(() => {
  const [type, setType] = useState('login');
  const globalState = useAppSelector(selectGlobal);
  const { theme } = globalState;
  const handleSwitchLoginType = () => {
    setType(type === 'register' ? 'login' : 'register');
  };

  return (
    <div
      className={classNames(Style.loginWrapper, { [Style.light]: theme === 'light', [Style.dark]: theme !== 'light' })}
    >
      <LoginHeader />
    </div>
  )
});
