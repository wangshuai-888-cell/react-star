import React, { memo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { selectGlobal } from 'modules/global';
import { useAppSelector } from 'modules/store';
import { Menu, MenuValue } from 'tdesign-react';

const { HeadMenu } = Menu;

const renderMenuItems = (menu: IRouter[], parentPath = '') => {
  const navigate = useNavigate();

}

export const HeaderMenu = memo(() => {
  const globalState = useAppSelector(selectGlobal);
  const location = useLocation();
  const [active, setActive] = useState<MenuValue>(location.pathname);

  return (
    <HeadMenu
      expandType='popup'
      style={{ marginBottom: 20 }}
      value={active}
      theme={globalState.theme}
      onChange={(v) => setActive(v)}
    >
    </HeadMenu>
  )
})