// Import icon for error display
import { FaExclamationTriangle } from "react-icons/fa";

// Reusable Product Card component
import ProductCard from "../shared/ProductCard";

// Redux state + dispatch
import { useDispatch, useSelector } from "react-redux";

// useEffect for data loading
import { useEffect } from "react";

// Action to fetch category list
import { fetchCategories } from "../../store/actions";

// Component to filter products (search, sort, category)
import Filter from "./Filter";

// Custom hook that fetches filtered products based on URL params
import useProductFilter from "../../hooks/useProductFilter";

// Reusable loader and pagination components
import Loader from "../shared/Loader";
import Paginations from "../shared/Paginations";

const Products = () => {
    // Redux state for error handling
    const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );

    // Redux state for products and metadata
    const { products, categories, pagination } = useSelector(
        (state) => state.products
    );

    const dispatch = useDispatch();

    // Custom hook to fetch filtered products using URL params
    useProductFilter();

    // Fetch product categories on initial load
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            {/* Category + sort + search filter bar */}
            <Filter categories={categories ? categories : []} />

            {/* Handle loading state */}
            {isLoading ? (
                <Loader />

            // Handle error state
            ) : errorMessage ? (
                <div className="flex justify-center items-center h-[200px]">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
                    <span className="text-slate-800 text-lg font-medium">
                        {errorMessage}
                    </span>
                </div>

            // Render products and pagination
            ) : (
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                        {products &&
                            products.map((item, i) => (
                                <ProductCard key={i} {...item} />
                            ))}
                    </div>

                    {/* Pagination section */}
                    <div className="flex justify-center pt-10">
                        <Paginations 
                            numberOfPage={pagination?.totalPages}
                            totalProducts={pagination?.totalElements}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
