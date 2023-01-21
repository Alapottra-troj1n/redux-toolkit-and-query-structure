import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await axios.get('http://localhost:5000/products');
    return res.data.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
            .addCase(getProducts.pending, (state, action) => {
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
  },
});

export default productsSlice.reducer;
