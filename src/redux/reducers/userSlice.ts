import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface dataUser {}

const initialState: dataUser | any = {
  dataUser: null,
  totalMoney: 0,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    saveDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
  },
});

export const { saveDataUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const dataCartHolding = (state: RootState) => state.cartData.data;

export default userSlice.reducer;
