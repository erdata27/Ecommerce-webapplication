// Initial state for auth-related information
const initialState = {
    user: null,                                 // Logged-in user information
    address: [],                                // User addresses
    clientSecret: null,                         // Stripe payment secret
    selectedUserCheckoutAddress: null,          // Selected address for checkout
};

// Auth reducer to manage authentication, user data, and checkout info
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Set user data on successful login
        case "LOGIN_USER":
            return { ...state, user: action.payload };

        // Store user addresses after fetching
        case "USER_ADDRESS":
            return { ...state, address: action.payload };

        // Store selected address for checkout
        case "SELECT_CHECKOUT_ADDRESS":
            return { ...state, selectedUserCheckoutAddress: action.payload };

        // Remove the selected checkout address (e.g., on logout)
        case "REMOVE_CHECKOUT_ADDRESS":
            return { ...state, selectedUserCheckoutAddress: null };

        // Save Stripe payment client secret
        case "CLIENT_SECRET":
            return { ...state, clientSecret: action.payload };

        // Clear Stripe client secret and selected address (post-payment)
        case "REMOVE_CLIENT_SECRET_ADDRESS":
            return { ...state, clientSecret: null, selectedUserCheckoutAddress: null };

        // Clear user and address info on logout
        case "LOG_OUT":
            return {
                user: null,
                address: null, // you can set this to [] for consistency if needed
            };

        // Return unchanged state for unknown actions
        default:
            return state;
    }
};
