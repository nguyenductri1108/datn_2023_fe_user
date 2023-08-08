import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface dataUser {}

const initialState: dataUser | any = {
  data: [],
  totalMoney: 0,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const dataCartHolding = (state: RootState) => state.cartData.data;

export default userSlice.reducer;
