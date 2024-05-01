import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: []
    },
    reducers: {
        addItem: (action, {payload}) => {
            action.list = [...action.list, payload]
        }
    }
})

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;