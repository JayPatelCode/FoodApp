import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
// import {cartReducer} from "./cartSlice.js";
const store=configureStore({
    reducer: {
        // cart: cartReducer,
        cart: cartSlice,
    },

});
export default store;