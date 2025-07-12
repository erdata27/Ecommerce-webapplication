// Import necessary components and utilities
import { Alert, AlertTitle, Skeleton } from '@mui/material'; // UI components
import { Elements } from '@stripe/react-stripe-js';           // Stripe context provider
import { loadStripe } from '@stripe/stripe-js';               // Load Stripe with public key
import React, { useEffect } from 'react';                     // React & useEffect
import { useDispatch, useSelector } from 'react-redux';       // Redux hooks
import PaymentForm from './PaymentForm';                      // Custom Stripe form component
import { createStripePaymentSecret } from '../../store/actions'; // Redux action to get clientSecret

// Load Stripe using the publishable key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
  const dispatch = useDispatch();

  // Pull necessary state from Redux store
  const { clientSecret } = useSelector((state) => state.auth);
  const { totalPrice } = useSelector((state) => state.carts);
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  // When component mounts, fetch clientSecret if it doesn't already exist
  useEffect(() => {
    if (!clientSecret) {
      dispatch(createStripePaymentSecret(totalPrice)); // dispatch API call to backend
    }
  }, [clientSecret]);

  // Show loading skeleton while request is being processed
  if (isLoading) {
    return (
      <div className='max-w-lg mx-auto'>
        <Skeleton />
      </div>
    );
  }

  return (
    <>
      {/* If clientSecret is available, render the Stripe payment form */}
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm clientSecret={clientSecret} totalPrice={totalPrice} />
        </Elements>
      )}

      {/* If clientSecret is missing and not loading, optionally show error (can be improved) */}
      {!clientSecret && !isLoading && errorMessage && (
        <div className='max-w-lg mx-auto'>
          <Alert severity="error">
            <AlertTitle>Payment Error</AlertTitle>
            {errorMessage}
          </Alert>
        </div>
      )}
    </>
  );
};

export default StripePayment;
