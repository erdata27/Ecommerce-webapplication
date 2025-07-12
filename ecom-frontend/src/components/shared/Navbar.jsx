// Import necessary modules and components
import { Badge } from "@mui/material"; // For showing cart item count
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa"; // Icons
import { IoIosMenu } from "react-icons/io"; // Mobile menu icon
import { RxCross2 } from "react-icons/rx"; // Close icon
import { useSelector } from "react-redux"; // Access global state
import { Link, useLocation } from "react-router-dom"; // For routing
import UserMenu from "../UserMenu"; // Custom component for logged-in users

const Navbar = () => {
    const path = useLocation().pathname; // Get current URL path
    const [navbarOpen, setNavbarOpen] = useState(false); // State for mobile menu toggle
    const { cart } = useSelector((state) => state.carts); // Cart from Redux store
    const { user } = useSelector((state) => state.auth); // Auth info from Redux store
    
    return (
        // Navbar container
        <div className="h-[70px] bg-custom-gradient text-white z-50 flex items-center sticky top-0">
            <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">

                {/* Logo section */}
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <FaStore className="mr-2 text-3xl" />
                    <span className="font-[Poppins]">E-Shop</span>
                </Link>

                {/* Navigation links */}
                <ul
                    className={`flex sm:gap-10 gap-4 sm:items-center text-slate-800 sm:static absolute left-0 top-[70px] 
                    sm:shadow-none shadow-md ${
                        navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
                    } transition-all duration-100 sm:h-fit sm:bg-none bg-custom-gradient 
                    text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
                >
                    {/* Individual nav links with active page highlighting */}
                    <li className="font-medium transition-all duration-150">
                        <Link
                            className={`${path === "/" ? "text-white font-semibold" : "text-gray-200"}`}
                            to="/">
                            Home
                        </Link>
                    </li>

                    <li className="font-medium transition-all duration-150">
                        <Link
                            className={`${path === "/products" ? "text-white font-semibold" : "text-gray-200"}`}
                            to="/products">
                            Products
                        </Link>
                    </li>

                    <li className="font-medium transition-all duration-150">
                        <Link
                            className={`${path === "/about" ? "text-white font-semibold" : "text-gray-200"}`}
                            to="/about">
                            About
                        </Link>
                    </li>

                    <li className="font-medium transition-all duration-150">
                        <Link
                            className={`${path === "/contact" ? "text-white font-semibold" : "text-gray-200"}`}
                            to="/contact">
                            Contact
                        </Link>
                    </li>

                    {/* Cart Icon with badge showing number of items */}
                    <li className="font-medium transition-all duration-150">
                        <Link
                            className={`${path === "/cart" ? "text-white font-semibold" : "text-gray-200"}`}
                            to="/cart">
                            <Badge
                                showZero
                                badgeContent={cart?.length || 0}
                                color="primary"
                                overlap="circular"
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            >
                                <FaShoppingCart size={25} />
                            </Badge>
                        </Link>
                    </li>

                    {/* Conditional rendering based on user login status */}
                    {(user && user.id) ? (
                        <li className="font-medium transition-all duration-150">
                            <UserMenu /> {/* Logged-in user dropdown */}
                        </li>
                    ) : (
                        <li className="font-medium transition-all duration-150">
                            <Link
                                to="/login"
                                className="flex items-center space-x-2 px-4 py-[6px] 
                                    bg-linear-to-r from-purple-600 to-red-500 
                                    text-white font-semibold rounded-md shadow-lg 
                                    hover:from-purple-500 hover:to-red-400 transition 
                                    duration-300 ease-in-out transform"
                            >
                                <FaSignInAlt />
                                <span>Login</span>
                            </Link>
                        </li>
                    )}
                </ul>

                {/* Mobile menu toggle button */}
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="sm:hidden flex items-center sm:mt-0 mt-2"
                >
                    {navbarOpen ? (
                        <RxCross2 className="text-white text-3xl" /> // Close icon
                    ) : (
                        <IoIosMenu className="text-white text-3xl" /> // Hamburger icon
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
