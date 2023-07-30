import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CartItem {
  id: string;
  price: number;
  quantity: number;
}

interface DataCartHolding {
  data: CartItem[];
  totalMoney: number;
}

// Define the initial state using that type
const initialState: DataCartHolding = {
  data: [],
  totalMoney: 0,
};

export const cartSlice = createSlice({
  name: 'cartHolding',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItemData: (state, action: PayloadAction<CartItem>) => {
      console.log(action.payload, 'hehe');
      state.data = [...state.data, action.payload];
      state.totalMoney = state.data.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      console.log(state.data);
    },
    removeItemData: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(item => item.id !== action.payload);
      state.totalMoney = state.data.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      console.log(state.data);
    },
  },
});

export const { addItemData, removeItemData } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const dataCartHolding = (state: RootState) => state.cartData.data;

export default cartSlice.reducer;
