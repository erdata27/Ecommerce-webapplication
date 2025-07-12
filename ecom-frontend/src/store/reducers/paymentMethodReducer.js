// Initial state for storing the selected payment method
const initialState = {
    paymentMethod: null, // Will hold payment method like "Credit Card", "UPI", etc.
};

// Reducer to handle payment method actions
export const paymentMethodReducer = (state = initialState, action) => {
    switch (action.type) {
        // When a user selects a payment method, update the state with it
        case "ADD_PAYMENT_METHOD":
            return {
                ...state,
                paymentMethod: action.payload, // payload contains selected method
            };

        // Default: return current state if action type doesn't match
        default:
            return state;
    }
};
