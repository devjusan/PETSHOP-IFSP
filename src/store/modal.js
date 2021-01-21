import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'mobileModal',
  initialState: false,
  reducers: {
    close: () => true,
    open: () => false,
  },
});

export const { open, close } = slice.actions;

export default slice.reducer;
