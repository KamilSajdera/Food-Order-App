import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0
    },
    reducers: {
        addItemToCart(state, action) {
            /// logic adding to cart soon...
        }
    }
});

export const cartActions = cartSlice.actions; // reducers
export default cartSlice // access to cartSlice's data