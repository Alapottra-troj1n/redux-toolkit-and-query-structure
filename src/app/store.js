import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filters/filterSlice";
import { productsAPI } from "../features/api-rtk/productAPI";

export const store = configureStore({
    reducer: {
        [productsAPI.reducerPath] : productsAPI.reducer,
        cart: cartSlice,
        filter: filterSlice,
   
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware),
  
})

export default store;