// Initial state for the cart
const initialState = {
    cart: [],            // Array of cart items
    totalPrice: 0,       // Total price of all items in the cart
    cartId: null,        // Unique cart ID from the backend (if applicable)
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        // Add or update a product in the cart
        case "ADD_CART":
            const productToAdd = action.payload;

            // Check if product already exists in cart
            const existingProduct = state.cart.find(
                (item) => item.productId === productToAdd.productId
            );

            if (existingProduct) {
                // Update quantity or other properties if already in cart
                const updatedCart = state.cart.map((item) =>
                    item.productId === productToAdd.productId
                        ? productToAdd
                        : item
                );
                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                // Add new product to cart
                const newCart = [...state.cart, productToAdd];
                return {
                    ...state,
                    cart: newCart,
                };
            }

        // Remove an item from the cart
        case "REMOVE_CART":
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.productId !== action.payload.productId
                ),
            };

        // Load the user's cart from the backend (on login or refresh)
        case "GET_USER_CART_PRODUCTS":
            return {
                ...state,
                cart: action.payload,
                totalPrice: action.totalPrice,
                cartId: action.cartId,
            };

        // Clear the cart (used after checkout or logout)
        case "CLEAR_CART":
            return {
                cart: [],
                totalPrice: 0,
                cartId: null,
            };

        // Default: return current state if no match
        default:
            return state;
    }
};
