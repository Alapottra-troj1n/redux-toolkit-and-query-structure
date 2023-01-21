import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, postProduct } from "./productsAPI";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  postSuccess: false,
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return fetchProducts();
  }
);
export const addProduct = createAsyncThunk(
  "products/postProduct",
  async (data) => {
    return postProduct(data);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.users = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true;
                state.postSuccess = false;
                state.isError = false;
            })
            .addCase(addProduct.fulfilled, (state) => {
                state.postSuccess = true;
                state.isLoading = false;

            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.postSuccess = false;
            })
  },
});

export default productsSlice.reducer;
