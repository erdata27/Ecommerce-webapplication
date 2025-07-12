// Initial state for managing various loading and error states across the app
const initialState = {
    isLoading: false,        // General loading state for API calls
    errorMessage: null,      // Stores error messages for general operations
    categoryLoader: false,   // Specific loader state for category-related operations
    categoryError: null,     // Stores error messages related to category operations
    btnLoader: false,        // Loader specifically used for button actions (e.g. form submission)
};

// Reducer for handling various loading, success, and error states
export const errorReducer = (state = initialState, action) => {
    switch (action.type) {

        // Set general loading state (used when fetching data)
        case "IS_FETCHING":
            return {
                ...state,
                isLoading: true,
                errorMessage: null,  // Clear any previous error
            };

        // Set button loader to true (e.g., for disabling submit button)
        case "BUTTON_LOADER":
            return {
                ...state,
                btnLoader: true,
                errorMessage: null,
                categoryError: null,
            };

        // Reset all loading/error states on success
        case "IS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                btnLoader: false,
                categoryError: null,
                categoryLoader: false,
            };

        // Set error state and turn off loading indicators
        case "IS_ERROR":
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload, // Receive error message from action
                btnLoader: false,
                categoryLoader: false,
            };

        // Reset category-related loader and error on success
        case "CATEGORY_SUCCESS":
            return {
                ...state,
                categoryLoader: false,
                categoryError: null,
            };

        // Activate loader for category-specific operations
        case "CATEGORY_LOADER":
            return {
                ...state,
                categoryLoader: true,
                categoryError: null,
                errorMessage: null, // Clear any general error
            };

        // Return current state for unknown action types
        default:
            return state;
    }  
};
