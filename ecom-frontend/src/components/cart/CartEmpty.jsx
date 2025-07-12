// Import required icons and routing component
import { MdArrowBack, MdShoppingCart } from "react-icons/md"; // Icons for cart and back arrow
import { Link } from "react-router-dom"; // For navigation

// Functional component for empty cart state
const CartEmpty = () => {
    return (
        // Main container with minimum height and centered content
        <div className="min-h-[800px] flex flex-col items-center justify-center">

            {/* Cart icon and messages */}
            <div className="flex flex-col items-center">
                {/* Shopping cart icon */}
                <MdShoppingCart size={80} className="mb-4 text-slate-500" />

                {/* Heading */}
                <div className="text-3xl font-bold text-slate-700">
                    Your cart is empty
                </div>

                {/* Subheading */}
                <div className="text-lg text-slate-500 mt-2">
                    Add some products to get started
                </div>
            </div>

            {/* Start Shopping button/link */}
            <div className="mt-6">
                <Link
                    to="/" // Navigates to home page (or product listing)
                    className="flex gap-2 items-center text-blue-500 hover:text-blue-600 transition"
                >
                    <MdArrowBack size={24} /> {/* Back arrow icon */}
                    <span className="font-medium">Start Shopping</span> {/* Link text */}
                </Link>
            </div>
        </div>
    );
}

export default CartEmpty;
