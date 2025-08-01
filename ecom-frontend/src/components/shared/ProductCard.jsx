// Import required dependencies and utilities
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal"; // Modal for viewing product details
import truncateText from "../../utils/truncateText"; // Utility to truncate long text
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions"; // Redux action to add item to cart
import toast from "react-hot-toast"; // For toast notifications

const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    about = false, // Flag to control UI (like on About page)
}) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false); // Controls modal visibility
    const btnLoader = false; // Placeholder for loading state on "Add to Cart"
    const [selectedViewProduct, setSelectedViewProduct] = useState(""); // Product currently selected to view
    const isAvailable = quantity && Number(quantity) > 0; // Check stock availability
    const dispatch = useDispatch();

    // Handle opening product view modal
    const handleProductView = (product) => {
        if (!about) {
            setSelectedViewProduct(product);
            setOpenProductViewModal(true);
        }
    };

    // Handle adding product to cart
    const addToCartHandler = (cartItems) => {
        dispatch(addToCart(cartItems, 1, toast)); // Dispatch redux action with 1 quantity
    };

    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            {/* Product image - opens modal on click */}
            <div
                onClick={() =>
                    handleProductView({
                        id: productId,
                        productName,
                        image,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice,
                    })
                }
                className="w-full overflow-hidden aspect-3/2"
            >
                <img
                    className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                    src={image}
                    alt={productName}
                />
            </div>

            {/* Product info */}
            <div className="p-4">
                {/* Product name - opens modal on click */}
                <h2
                    onClick={() =>
                        handleProductView({
                            id: productId,
                            productName,
                            image,
                            description,
                            quantity,
                            price,
                            discount,
                            specialPrice,
                        })
                    }
                    className="text-lg font-semibold mb-2 cursor-pointer"
                >
                    {truncateText(productName, 50)}
                </h2>

                {/* Product description */}
                <div className="min-h-20 max-h-20">
                    <p className="text-gray-600 text-sm">
                        {truncateText(description, 80)}
                    </p>
                </div>

                {/* Show price and Add to Cart button only if not on About page */}
                {!about && (
                    <div className="flex items-center justify-between mt-3">
                        {/* Show special price if available, else regular price */}
                        {specialPrice ? (
                            <div className="flex flex-col">
                                <span className="text-gray-400 line-through">
                                    ${Number(price).toFixed(2)}
                                </span>
                                <span className="text-xl font-bold text-slate-700">
                                    ${Number(specialPrice).toFixed(2)}
                                </span>
                            </div>
                        ) : (
                            <span className="text-xl font-bold text-slate-700">
                                ${Number(price).toFixed(2)}
                            </span>
                        )}

                        {/* Add to Cart Button */}
                        <button
                            disabled={!isAvailable || btnLoader}
                            onClick={() =>
                                addToCartHandler({
                                    image,
                                    productName,
                                    description,
                                    specialPrice,
                                    price,
                                    productId,
                                    quantity,
                                })
                            }
                            className={`bg-blue-500 ${
                                isAvailable
                                    ? "opacity-100 hover:bg-blue-600"
                                    : "opacity-70"
                            } text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center`}
                        >
                            <FaShoppingCart className="mr-2" />
                            {isAvailable ? "Add to Cart" : "Stock Out"}
                        </button>
                    </div>
                )}
            </div>

            {/* Product view modal */}
            <ProductViewModal
                open={openProductViewModal}
                setOpen={setOpenProductViewModal}
                product={selectedViewProduct}
                isAvailable={isAvailable}
            />
        </div>
    );
};

export default ProductCard;
