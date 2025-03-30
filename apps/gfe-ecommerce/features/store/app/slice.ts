import { createSlice } from '@reduxjs/toolkit';

export type AppState = {
  dummy: string;
};

const initialState: AppState = {
  dummy: 'dummy',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
