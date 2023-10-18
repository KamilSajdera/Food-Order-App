import { createSlice } from "@reduxjs/toolkit";
import isEqual from 'lodash/isEqual';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], 
        totalItems: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = {itemData: action.payload, amount: 1};

            const existingItemIndex = state.items.findIndex(item => isEqual(item.itemData, newItem.itemData))
            
            if(existingItemIndex === -1) {
                console.log("Item no exist. Adding to array...")
                state.items.push(newItem)
            } else {
                console.log("Item exist. Editing it's amount (+1)")
                state.items[existingItemIndex].amount += 1;
            }

            state.totalItems++;
        }
    }
});

export const cartActions = cartSlice.actions; // reducers
export default cartSlice // access to cartSlice's data