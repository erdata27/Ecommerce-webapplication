import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import { paymentMethodReducer } from "./paymentMethodReducer";

// Retrieve stored user info from localStorage if available, else null
const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;

// Retrieve stored cart items from localStorage if available, else empty array
const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

// Retrieve selected checkout address from localStorage if available, else empty array
const selectUserCheckoutAddress = localStorage.getItem("CHECKOUT_ADDRESS")
    ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
    : [];

// Define the initial Redux state for the store using persisted values
const initialState = {
    auth: { 
        user: user,                        // User authentication state
        selectUserCheckoutAddress          // User's selected address during checkout
    },
    carts: { 
        cart: cartItems                    // Cart items stored locally
    },
};

// Configure the Redux store using Redux Toolkit's configureStore
export const store = configureStore({
    reducer: {
        products: productReducer,          // Products and categories reducer
        errors: errorReducer,              // Global loading/error state reducer
        carts: cartReducer,                // Cart management reducer
        auth: authReducer,                 // Authentication reducer (user, address)
        payment: paymentMethodReducer,    // Payment method reducer
    },
    preloadedState: initialState,          // Initial state hydrated from localStorage
});

export default store;
