import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import userReducer from './reducers/userSlice';
// ...

export const store = configureStore({
  reducer: {
    cartData: cartReducer,
    userData: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
