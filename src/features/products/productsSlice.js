import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, postProduct } from "./productsAPI";
import { productAPI } from "../utils/axios.config";
import { toast } from "react-hot-toast";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  postSuccess: false,
  postDelete: false,
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

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkAPI) => {
    const { data } = await productAPI.delete(`/product/${id}`, id);
    if (data.deletedCount) {
      toast.success("deleted");
      thunkAPI.dispatch(removeProduct(id));
    }
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    togglePostSuccess: (state) => {
      state.postSuccess = false;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
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
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.postDelete = false;
        state.isError = false;
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.postDelete = true;
        state.isLoading = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.postDelete = false;
      });
  },
});

export const { togglePostSuccess, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
