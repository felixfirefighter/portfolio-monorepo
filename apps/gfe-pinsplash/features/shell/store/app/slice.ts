import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AppState = {
  searchTerm: string;
};

const initialState: AppState = {
  searchTerm: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchTerm: (state: AppState, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = appSlice.actions;

export default appSlice.reducer;
