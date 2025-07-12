// Initial state for products and categories with pagination info
const initialState = {
    products: null,    // List of products fetched from API
    categories: null,  // List of categories fetched from API
    pagination: {},    // Pagination details like page number, size, total elements, etc.
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // Handles the action to fetch products list
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload, // Update products array with fetched data
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,       // Current page number
                    pageSize: action.pageSize,           // Number of items per page
                    totalElements: action.totalElements, // Total number of products
                    totalPages: action.totalPages,       // Total pages available
                    lastPage: action.lastPage,           // Boolean indicating last page
                },
            };

        // Handles the action to fetch categories list
        case "FETCH_CATEGORIES":
            return {
                ...state,
                categories: action.payload,  // Update categories array with fetched data
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,       // Current page number for categories
                    pageSize: action.pageSize,           // Items per page for categories
                    totalElements: action.totalElements, // Total categories count
                    totalPages: action.totalPages,       // Total pages for categories
                    lastPage: action.lastPage,           // Boolean for last page flag
                },
            };

        // Default case: return existing state for unhandled action types
        default:
            return state;
    }
};
