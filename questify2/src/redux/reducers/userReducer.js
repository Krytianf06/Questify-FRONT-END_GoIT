import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    name: null,
    dashboard: null,
    token: null,
    success: false,
  },
  reducers: {
    loginUser: (state, { payload }) => ({
      id: payload._id,
      name: payload.name,
      dashboard: payload.dashboard,
      token: payload.token,
    }),
    logOutUser: (state, { payload }) => ({ name: payload.name }),
    refreshUser: (state, payload) => ({
      name: payload.name,
    }),
  },
});