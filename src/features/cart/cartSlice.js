import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const selectedProduct = state.cart.find(product => product._id === action.payload._id);

            if (!selectedProduct) {
                const product = { ...action.payload, quantity: 1 }
                state.cart.push(product);
            } else {
                selectedProduct.quantity +=1;
            }


        },
        removeProduct: (state, action) => {
            const selectedProduct = state.cart.find(product => product._id === action.payload._id);
            if(selectedProduct.quantity > 1){
                selectedProduct.quantity -=1;
            }else{
                state.cart = state.cart.filter(product => product._id !== action.payload._id);
            }
        }

    }
})

export const { addToCart,removeProduct } = cartSlice.actions;

export default cartSlice.reducer;