import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../store/actions";

// Custom hook to filter and fetch products based on query parameters in the URL
const useProductFilter = () => {
    const [searchParams] = useSearchParams(); // Access URL search parameters like ?page=2&category=shoes
    const dispatch = useDispatch(); // Redux dispatch function

    useEffect(() => {
        const params = new URLSearchParams(); // Object to build new query string

        // Extract 'page' parameter from URL, fallback to 1 if not present
        const currentPage = searchParams.get("page")
            ? Number(searchParams.get("page"))
            : 1;

        // Backend usually expects 0-based page indexing, hence subtract 1
        params.set("pageNumber", currentPage - 1);

        // Get sorting order from URL, default is "asc" (ascending)
        const sortOrder = searchParams.get("sortby") || "asc";

        // Get selected category from URL if any
        const categoryParams = searchParams.get("category") || null;

        // Get keyword for search from URL if present
        const keyword = searchParams.get("keyword") || null;

        // Fixed sort by price (can be enhanced later)
        params.set("sortBy", "price");
        params.set("sortOrder", sortOrder);

        // Add category to query if available
        if (categoryParams) {
            params.set("category", categoryParams);
        }

        // Add keyword to query if available
        if (keyword) {
            params.set("keyword", keyword);
        }

        // Convert the final params object to a query string
        const queryString = params.toString();

        // Debug log to verify query structure
        console.log("QUERY STRING", queryString);

        // Dispatch Redux action to fetch filtered products from API
        dispatch(fetchProducts(queryString));

    // Hook triggers whenever the dispatch function or URL searchParams change
    }, [dispatch, searchParams]);
};

export default useProductFilter;
