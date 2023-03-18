import { createAsyncThunk } from '@reduxjs/toolkit';

const namespace = 'user';

export const login = createAsyncThunk(`${namespace}/login`, async (userInfo: Record<string, unknown>) => {
  const mockLogin = async (userInfo: Record<string, unknown>) => {
    console.log(userInfo);
    return {
      code: 200,
      message: '登陆成功',
      data: 'main_token',
    };
  };

  const res = await mockLogin(userInfo);
  if (res.code === 200) {
    return res.data;
  }
  throw res;
});
