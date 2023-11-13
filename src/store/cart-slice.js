import { createSlice } from "@reduxjs/toolkit";
import isEqual from 'lodash/isEqual';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], 
        totalItems: 0,
        totalCost: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = {itemData: action.payload, amount: 1};

            const existingItemIndex = state.items.findIndex(item => isEqual(item.itemData, newItem.itemData))
            
            if(existingItemIndex === -1) 
                state.items.push(newItem)
            else 
                state.items[existingItemIndex].amount += 1;

            if(newItem.itemData.extraPay === undefined) 
                state.totalCost += parseFloat(newItem.itemData.price)
            else 
                state.totalCost += parseFloat(newItem.itemData.price) + parseFloat(newItem.itemData.extraPay) 
            
            state.totalItems++;
        }
    }
});

export const cartActions = cartSlice.actions; // reducers
export default cartSlice // access to cartSlice's data