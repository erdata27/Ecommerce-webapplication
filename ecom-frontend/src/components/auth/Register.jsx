// Import necessary React hooks and libraries
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // For managing form state and validation
import { FaUserPlus } from 'react-icons/fa'; // Registration icon
import { Link, useNavigate } from 'react-router-dom'; // Routing and navigation
import InputField from '../shared/InputField'; // Reusable custom input field
import { useDispatch } from 'react-redux'; // For dispatching Redux actions
import { registerNewUser } from '../../store/actions'; // Redux async action for user registration
import toast from 'react-hot-toast'; // Notification system
import Spinners from '../shared/Spinners'; // Custom loading spinner component

// Register component
const Register = () => {
    const navigate = useNavigate(); // Used for redirection after successful registration
    const dispatch = useDispatch(); // To dispatch actions to Redux store
    const [loader, setLoader] = useState(false); // Loader state to show loading UI on submit

    // useForm hook from react-hook-form for managing form logic
    const {
        register, // To register input fields with validation
        handleSubmit, // Handles form submission
        reset, // Resets form values
        formState: { errors }, // Object containing validation errors
    } = useForm({
        mode: "onTouched", // Validate fields only after they're touched
    });

    // Handler for form submit
    const registerHandler = async (data) => {
        console.log("Register Click");
        // Dispatch Redux action to register user
        dispatch(registerNewUser(data, toast, reset, navigate, setLoader));
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            {/* Form wrapper */}
            <form
                onSubmit={handleSubmit(registerHandler)} // Runs form validation before calling registerHandler
                className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md"
            >
                {/* Header Section with icon and title */}
                <div className="flex flex-col items-center justify-center space-y-4">
                    <FaUserPlus className="text-slate-800 text-5xl" />
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        Register Here
                    </h1>
                </div>

                <hr className="mt-2 mb-5 text-black" />

                {/* Form Fields */}
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
                        label="Email"
                        required
                        id="email"
                        type="email"
                        message="*Email is required"
                        placeholder="Enter your email"
                        register={register}
                        errors={errors}
                    />

                    <InputField
                        label="Password"
                        required
                        id="password"
                        min={6}
                        type="password"
                        message="*Password is required"
                        placeholder="Enter your password"
                        register={register}
                        errors={errors}
                    />
                </div>

                {/* Submit Button */}
                <button
                    disabled={loader} // Disable while loading
                    className="bg-button-gradient flex gap-2 items-center justify-center font-semibold text-white w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-xs my-3"
                    type="submit"
                >
                    {loader ? (
                        <>
                            <Spinners /> Loading...
                        </>
                    ) : (
                        <>Register</>
                    )}
                </button>

                {/* Redirect to login page */}
                <p className="text-center text-sm text-slate-700 mt-6">
                    Already have an account?
                    <Link
                        className="font-semibold underline hover:text-black"
                        to="/login"
                    >
                        <span> Login</span>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
