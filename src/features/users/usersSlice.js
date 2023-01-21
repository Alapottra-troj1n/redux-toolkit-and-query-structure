import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoading = false;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.users = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    },
});

export default usersSlice.reducer;