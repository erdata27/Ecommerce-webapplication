// Stripe components to handle secure payment form
import { Skeleton } from '@mui/material';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const PaymentForm = ({ clientSecret, totalPrice }) => {
  // Stripe hook to access Stripe.js instance
  const stripe = useStripe();

  // Hook to access payment form elements (like card input)
  const elements = useElements();

  // State to capture and show error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Submit handler for the payment form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guard clause: wait until stripe and elements are ready
    if (!stripe || !elements) {
      return;
    }

    // Optional: Confirm that form fields are validated
    const { error: submitError } = await elements.submit();

    // Stripe confirm payment using clientSecret and redirect URL
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${import.meta.env.VITE_FRONTEND_URL}/order-confirm`, // Redirect after success
      },
    });

    // If payment fails, show error message
    if (error) {
      setErrorMessage(error.message);
      return false;
    }
  };

  // Optional customization for the payment UI layout
  const paymentElementOptions = {
    layout: "tabs",
  };

  // Loading state until Stripe is fully initialized and clientSecret is available
  const isLoading = !clientSecret || !stripe || !elements;

  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto p-4'>
      <h2 className='text-xl font-semibold mb-4'>Payment Information</h2>

      {isLoading ? (
        // Show skeleton while Stripe is loading
        <Skeleton />
      ) : (
        <>
          {/* Stripe payment input rendered here */}
          {clientSecret && <PaymentElement options={paymentElementOptions} />}

          {/* Display any error from Stripe */}
          {errorMessage && (
            <div className='text-red-500 mt-2'>{errorMessage}</div>
          )}

          {/* Submit button to pay */}
          <button
            className='text-white w-full px-5 py-[10px] bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse'
            disabled={!stripe || isLoading}>
            {/* Button text changes if loading */}
            {!isLoading
              ? `Pay $${Number(totalPrice).toFixed(2)}`
              : "Processing"}
          </button>
        </>
      )}
    </form>
  );
};

export default PaymentForm;
