import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filters/filterSlice";
import usersSlice from "../features/users/usersSlice";
import productsSlice from "../features/products/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
        users: usersSlice,
        products: productsSlice
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat();
})

export default store;