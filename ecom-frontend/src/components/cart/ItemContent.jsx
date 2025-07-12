// Import required hooks, icons, utilities, and Redux actions
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi"; // Trash icon for removing items
import SetQuantity from "./SetQuantity"; // Component to increase/decrease quantity
import { useDispatch } from "react-redux";
import {
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
} from "../../store/actions"; // Redux actions
import toast from "react-hot-toast"; // For notifications
import { formatPrice } from "../../utils/formatPrice"; // Utility to format price
import truncateText from "../../utils/truncateText"; // Utility to truncate long product names

// Functional component for rendering a cart item
const ItemContent = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    cartId,
}) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity); // Local state for quantity
    const dispatch = useDispatch(); // Initialize Redux dispatch

    // Increase quantity handler
    const handleQtyIncrease = (cartItems) => {
        dispatch(
            increaseCartQuantity(
                cartItems,
                toast,
                currentQuantity,
                setCurrentQuantity
            )
        );
    };

    // Decrease quantity handler
    const handleQtyDecrease = (cartItems) => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            setCurrentQuantity(newQuantity); // Update local state
            dispatch(decreaseCartQuantity(cartItems, newQuantity)); // Update store
        }
    };

    // Remove item from cart
    const removeItemFromCart = (cartItems) => {
        dispatch(removeFromCart(cartItems, toast));
    };

    return (
        <div className="grid md:grid-cols-5 grid-cols-4 md:text-md text-sm gap-4 items-center border border-slate-200 rounded-md lg:px-4 py-4 p-2">
            {/* Product Info: Name + Image + Remove Button */}
            <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
                <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
                    <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
                        {truncateText(productName)} {/* Truncated product name */}
                    </h3>
                </div>

                {/* Product Image */}
                <div className="md:w-36 sm:w-24 w-12">
                    <img
                        src={`${import.meta.env.VITE_BACK_END_URL}/images/${image}`} // Backend image URL
                        alt={productName}
                        className="md:h-36 sm:h-24 h-12 w-full object-cover rounded-md"
                    />

                    {/* Remove Button */}
                    <div className="flex items-start gap-5 mt-3">
                        <button
                            onClick={() =>
                                removeItemFromCart({
                                    image,
                                    productName,
                                    description,
                                    specialPrice,
                                    price,
                                    productId,
                                    quantity,
                                })
                            }
                            className="flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition-colors duration-200"
                        >
                            <HiOutlineTrash size={16} className="text-rose-600" />
                            Remove
                        </button>
                    </div>
                </div>
            </div>

            {/* Unit Price */}
            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                {formatPrice(Number(specialPrice))}
            </div>

            {/* Quantity Controls */}
            <div className="justify-self-center">
                <SetQuantity
                    quantity={currentQuantity}
                    cardCounter={true} // Enables increment/decrement buttons
                    handeQtyIncrease={() =>
                        handleQtyIncrease({
                            image,
                            productName,
                            description,
                            specialPrice,
                            price,
                            productId,
                            quantity,
                        })
                    }
                    handleQtyDecrease={() =>
                        handleQtyDecrease({
                            image,
                            productName,
                            description,
                            specialPrice,
                            price,
                            productId,
                            quantity,
                        })
                    }
                />
            </div>

            {/* Total for this product */}
            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                {formatPrice(Number(currentQuantity) * Number(specialPrice))}
            </div>
        </div>
    );
};

export default ItemContent;
