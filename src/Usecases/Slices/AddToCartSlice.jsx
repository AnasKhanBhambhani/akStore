import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    addToCartData: [],
    orderSummary: {
        subtotal: null,
        shipping: 0,
        tax: 0,
    },
    totalCarts: 0,
}
export const AddToCartSlice = createSlice({
    name: 'addtocart',
    initialState,
    reducers: {
        AddToCartReducer: (state, action) => {
            const cartIndex = state.addToCartData.findIndex(cart => cart.id === action.payload.id);
            if (cartIndex >= 0) {
                state.addToCartData[cartIndex].quantity += action.payload.quantity
                state.addToCartData[cartIndex].price *= state.addToCartData[cartIndex].quantity
            } else {
                state.addToCartData.push({
                    ...action.payload,
                    unitPrice: action.payload.price,
                    price: action.payload.price * action.payload.quantity,
                })
            }
        },
        removeItemFromCart: (state, action) => {
            state.addToCartData = state.addToCartData.filter(item => item.id !== action.payload);
            const totalquantity = state.addToCartData.reduce((total, item) => {
                return total + item.quantity;
            }, 0);
            state.totalCarts = totalquantity;
        },
        updateItemQuantity: (state, action) => {
            const { id, quantity, increment } = action.payload

            const cartIndex = state.addToCartData.findIndex(cart => cart.id === id);
            if (cartIndex >= 0) {
                state.addToCartData[cartIndex].quantity += increment
                state.addToCartData[cartIndex].price = state.addToCartData[cartIndex].unitPrice * state.addToCartData[cartIndex].quantity;
            }
        },
        updateSummary: (state, action) => {
            const { shipping, tax } = action.payload
            const subtotal = state.addToCartData.reduce((total, item) => {
                return total + item.price;
            }, 0);
            state.orderSummary.subtotal = subtotal.toFixed(2);
            state.orderSummary.shipping = shipping;
            state.orderSummary.tax = tax;

        },
        getCartQuantity: (state) => {
            const totalquantity = state.addToCartData.reduce((total, item) => {
                return total + item.quantity;
            }, 0);
            state.totalCarts = totalquantity;


        },
        clearCart: (state) => {
            state.addToCartData = [];
            state.orderSummary = {};
            state.totalCarts= 0;
        },
    }
})
export const { AddToCartReducer, clearCart, removeItemFromCart, updateItemQuantity, updateSummary, getCartQuantity } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;