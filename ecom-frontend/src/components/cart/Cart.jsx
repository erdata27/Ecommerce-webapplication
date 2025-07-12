// Import required libraries and components
import { MdArrowBack, MdShoppingCart } from "react-icons/md"; // Icons
import { useDispatch, useSelector } from "react-redux"; // Redux hooks
import { Link } from "react-router-dom"; // Routing
import ItemContent from "./ItemContent"; // Component to render each cart item
import CartEmpty from "./CartEmpty"; // Component to show when cart is empty
import { formatPrice } from "../../utils/formatPrice"; // Utility to format currency

const Cart = () => {
    const dispatch = useDispatch(); // To dispatch actions (if needed later)

    // Get cart items from Redux store
    const { cart } = useSelector((state) => state.carts);

    // Clone cart to safely compute total price
    const newCart = { ...cart };

    // Calculate total price of all cart items
    newCart.totalPrice = cart?.reduce(
        (acc, cur) => acc + Number(cur?.specialPrice) * Number(cur?.quantity),
        0
    );

    // If cart is empty or undefined, show empty cart screen
    if (!cart || cart.length === 0) return <CartEmpty />;

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-10">
            {/* Cart Header */}
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                    <MdShoppingCart size={36} className="text-gray-700" />
                    Your Cart
                </h1>
                <p className="text-lg text-gray-600 mt-2">All your selected items</p>
            </div>

            {/* Table Headers */}
            <div className="grid md:grid-cols-5 grid-cols-4 gap-4 pb-2 font-semibold items-center">
                <div className="md:col-span-2 justify-self-start text-lg text-slate-800 lg:ps-4">
                    Product
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Price
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Quantity
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Total
                </div>
            </div>

            {/* Cart Items */}
            <div>
                {cart && cart.length > 0 &&
                    cart.map((item, i) => (
                        <ItemContent key={i} {...item} />
                    ))}
            </div>

            {/* Summary and Actions */}
            <div className="border-t-[1.5px] border-slate-200 py-4 flex sm:flex-row sm:px-0 px-2 flex-col sm:justify-between gap-4">
                <div></div> {/* Left side spacer (can be used for coupons or notes) */}

                <div className="flex text-sm gap-1 flex-col">
                    {/* Subtotal Section */}
                    <div className="flex justify-between w-full md:text-lg text-sm font-semibold">
                        <span>Subtotal</span>
                        <span>{formatPrice(newCart?.totalPrice)}</span>
                    </div>

                    {/* Note on taxes */}
                    <p className="text-slate-500">
                        Taxes and shipping calculated at checkout
                    </p>

                    {/* Checkout Button */}
                    <Link className="w-full flex justify-end" to="/checkout">
                        <button
                            onClick={() => {}}
                            className="font-semibold w-[300px] py-2 px-4 rounded-xs bg-custom-blue text-white flex items-center justify-center gap-2 hover:text-gray-300 transition duration-500"
                        >
                            <MdShoppingCart size={20} />
                            Checkout
                        </button>
                    </Link>

                    {/* Continue Shopping Link */}
                    <Link className="flex gap-2 items-center mt-2 text-slate-500" to="/products">
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
