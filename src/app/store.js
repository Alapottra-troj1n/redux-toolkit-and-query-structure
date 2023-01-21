import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filters/filterSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
        users: usersSlice
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat();
})

export default store;