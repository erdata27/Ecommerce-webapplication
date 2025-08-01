import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { stripePaymentConfirmation } from '../../store/actions';
import toast from 'react-hot-toast';

// Component to show confirmation after Stripe payment is completed
const PaymentConfirmation = () => {
  const location = useLocation(); // Access URL parameters from redirect
  const searchParams = new URLSearchParams(location.search); // Parse query params

  const dispatch = useDispatch();

  // States for error and loading
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { cart } = useSelector((state) => state.carts);

  // Extract Stripe payment-related query params
  const paymentIntent = searchParams.get("payment_intent");
  const clientSecret = searchParams.get("payment_intent_client_secret");
  const redirectStatus = searchParams.get("redirect_status");

  // Retrieve selected checkout address from localStorage
  const selectedUserCheckoutAddress = localStorage.getItem("CHECKOUT_ADDRESS")
    ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
    : [];

  // useEffect triggers payment confirmation call if all required values are present
  useEffect(() => {
    if (
      paymentIntent &&
      clientSecret &&
      redirectStatus &&
      cart &&
      cart?.length > 0
    ) {
      const sendData = {
        addressId: selectedUserCheckoutAddress.addressId, // Address where product will be delivered
        pgName: "Stripe", // Payment Gateway name
        pgPaymentId: paymentIntent, // Stripe payment ID
        pgStatus: "succeeded", // Hardcoded here but should match Stripe response
        pgResponseMessage: "Payment successful", // Confirmation message
      };

      // Send the data to backend to store order/payment record
      dispatch(
        stripePaymentConfirmation(sendData, setErrorMessage, setLoading, toast)
      );
    }
  }, [paymentIntent, clientSecret, redirectStatus, cart]);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      {loading ? (
        // Show loading state while payment confirmation is being processed
        <div className='max-w-xl mx-auto'>
          <Skeleton />
        </div>
      ) : (
        // Success UI once payment is confirmed
        <div className="p-8 rounded-lg shadow-lg text-center max-w-md mx-auto border border-gray-200">
          <div className="text-green-500 mb-4 flex justify-center">
            <FaCheckCircle size={64} />
          </div>
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase! Your payment was successful, and we’re
            processing your order.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentConfirmation;
