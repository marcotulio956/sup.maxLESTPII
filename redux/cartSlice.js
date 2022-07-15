import { createSlice } from "@reduxjs/toolkit";

const productSet = new Set([]);
const duplicated = 0;
const product = [];

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        id: [],
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            for (product of productSet) {
                if (Object.is(product.id, action.payload.id) && Object.is(product.extraOption, action.payload.extraOption)) {
                    duplicated = 1;
                    action.payload.quantity = parseInt(action.payload.quantity) + parseInt(product.quantity);
                    break;
                }
            };

            if (!duplicated) {
                productSet.add(action.payload)
                state.quantity += 1;
            } else {
                productSet.delete(product);
                productSet.add(action.payload);
                state.total -= product.price * product.quantity;
            }

            state.total += action.payload.price * action.payload.quantity;
            state.products = Array.from(productSet)
            duplicated = 0;
        },
        removeProduct: (state, action) => {
            for (product of productSet) {
                if (Object.is(product.id, action.payload.id) && Object.is(product.extraOption, action.payload.extraOption)) {
                    productSet.delete(product)
                    state.total -= product.price * product.quantity;
                }
            }
            state.quantity -= 1;
            state.products = Array.from(productSet)
        },
        reset: (state) => {
            productSet = new Set([]);
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addProduct, removeProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;