// Redux hooks for state management
import { useDispatch, useSelector } from "react-redux";

// Custom components
import HeroBanner from "./HeroBanner";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";

// React hooks
import { useEffect } from "react";

// Redux action to fetch products
import { fetchProducts } from "../../store/actions";

// Icon for error display
import { FaExclamationTriangle } from "react-icons/fa";

const Home = () => {
    const dispatch = useDispatch();

    // Select product data and loading/error states from Redux store
    const { products } = useSelector((state) => state.products);
    const { isLoading, errorMessage } = useSelector((state) => state.errors);

    // On component mount, fetch products from backend
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4">
            {/* Hero banner at the top of the homepage */}
            <div className="py-6">
                <HeroBanner />
            </div>

            {/* Section heading and subtitle */}
            <div className="py-5">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-slate-800 text-4xl font-bold">Products</h1>
                    <span className="text-slate-700">
                        Discover our handpicked selection of top-rated items just for you!
                    </span>
                </div>

                {/* Conditional rendering for loader, error, or products */}
                {isLoading ? (
                    <Loader />
                ) : errorMessage ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
                        <span className="text-slate-800 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
                    // Products Grid: Display first 4 products in a responsive grid
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                        {products &&
                            products.slice(0, 4).map((item, i) => (
                                <ProductCard key={i} {...item} />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
