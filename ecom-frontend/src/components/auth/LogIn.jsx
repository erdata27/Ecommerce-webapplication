// Import React hooks and necessary libraries
import { useState } from "react";
import { useForm } from "react-hook-form"; // For form handling and validation
import { AiOutlineLogin } from "react-icons/ai"; // Login icon
import { Link, useNavigate } from "react-router-dom"; // For navigation and links
import InputField from "../shared/InputField"; // Custom reusable input field component
import { useDispatch } from "react-redux"; // To dispatch actions to Redux store
import { authenticateSignInUser } from "../../store/actions"; // Redux action for login
import toast from "react-hot-toast"; // For showing toast notifications
import Spinners from "../shared/Spinners"; // Custom spinner loader component

// Login Component
const LogIn = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate
    const dispatch = useDispatch(); // To dispatch Redux actions
    const [loader, setLoader] = useState(false); // State to control loading spinner

    // Destructure useful methods from react-hook-form
    const {
        register, // Registers form fields for validation
        handleSubmit, // Handles form submission
        reset, // Resets form fields after submission
        formState: { errors }, // Holds validation errors
    } = useForm({
        mode: "onTouched", // Validation runs when input is touched
    });

    // Function triggered on form submit
    const loginHandler = async (data) => {
        console.log("Login Click");
        dispatch(authenticateSignInUser(data, toast, reset, navigate, setLoader));
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(loginHandler)} // Handle form submit using react-hook-form
                className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md"
            >
                {/* Heading and Icon */}
                <div className="flex flex-col items-center justify-center space-y-4">
                    <AiOutlineLogin className="text-slate-800 text-5xl" />
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        Login Here
                    </h1>
                </div>

                <hr className="mt-2 mb-5 text-black" />

                {/* Username and Password Fields */}
                <div className="flex flex-col gap-3">
                    <InputField
                        label="UserName"
                        required
                        id="username"
                        type="text"
                        message="*UserName is required"
                        placeholder="Enter your username"
                        register={register}
                        errors={errors}
                    />

                    <InputField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Enter your password"
                        register={register}
                        errors={errors}
                    />
                </div>

                {/* Submit Button */}
                <button
                    disabled={loader} // Disable button when loading
                    className="bg-button-gradient flex gap-2 items-center justify-center font-semibold text-white w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-xs my-3"
                    type="submit"
                >
                    {loader ? (
                        <>
                            <Spinners /> Loading...
                        </>
                    ) : (
                        <>Login</>
                    )}
                </button>

                {/* Redirect to signup page */}
                <p className="text-center text-sm text-slate-700 mt-6">
                    Don't have an account?
                    <Link
                        className="font-semibold underline hover:text-black"
                        to="/register"
                    >
                        <span> SignUp</span>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LogIn;
