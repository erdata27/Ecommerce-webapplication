// Import dependencies
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddressInfo from './AddressInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAddresses } from '../../store/actions';
import toast from 'react-hot-toast';
import Skeleton from '../shared/Skeleton';
import ErrorPage from '../shared/ErrorPage';
import PaymentMethod from './PaymentMethod';
import OrderSummary from './OrderSummary';
import StripePayment from './StripePayment';
import PaypalPayment from './PaypalPayment';

const Checkout = () => {
  // Manage the current step of the checkout process
  const [activeStep, setActiveStep] = useState(0);

  const dispatch = useDispatch();

  // Access Redux state values
  const { isLoading, errorMessage } = useSelector((state) => state.errors);
  const { cart, totalPrice } = useSelector((state) => state.carts);
  const { address, selectedUserCheckoutAddress } = useSelector((state) => state.auth);
  const { paymentMethod } = useSelector((state) => state.payment);

  // Stepper button handlers
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    // Step 0: Ensure address is selected before proceeding
    if (activeStep === 0 && !selectedUserCheckoutAddress) {
      toast.error("Please select checkout address before proceeding.");
      return;
    }

    // Step 1: Ensure payment method is selected before proceeding
    if (activeStep === 1 && (!selectedUserCheckoutAddress || !paymentMethod)) {
      toast.error("Please select payment method before proceeding.");
      return;
    }

    // Move to next step
    setActiveStep((prevStep) => prevStep + 1);
  };

  // Step titles
  const steps = [
    "Address",
    "Payment Method",
    "Order Summary",
    "Payment",
  ];

  // Fetch user addresses on initial load
  useEffect(() => {
    dispatch(getUserAddresses());
  }, [dispatch]);

  return (
    <div className='py-14 min-h-[calc(100vh-100px)]'>

      {/* Stepper UI using MUI */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Loading skeleton */}
      {isLoading ? (
        <div className='lg:w-[80%] mx-auto py-5'>
          <Skeleton />
        </div>
      ) : (
        <div className='mt-5'>
          {/* Conditionally render content based on current step */}
          {activeStep === 0 && <AddressInfo address={address} />}
          {activeStep === 1 && <PaymentMethod />}
          {activeStep === 2 && (
            <OrderSummary 
              totalPrice={totalPrice}
              cart={cart}
              address={selectedUserCheckoutAddress}
              paymentMethod={paymentMethod}
            />
          )}
          {activeStep === 3 && (
            <>
              {paymentMethod === "Stripe" ? <StripePayment /> : <PaypalPayment />}
            </>
          )}
        </div>
      )}

      {/* Fixed bottom action buttons */}
      <div
        className='flex justify-between items-center px-4 fixed z-50 h-24 bottom-0 bg-white left-0 w-full py-4 border-slate-200'
        style={{ boxShadow: "0 -2px 4px rgba(100, 100, 100, 0.15)" }}
      >
        {/* Back button */}
        <Button
          variant='outlined'
          disabled={activeStep === 0}
          onClick={handleBack}>
          Back
        </Button>

        {/* Proceed button (only shown before final step) */}
        {activeStep !== steps.length - 1 && (
          <button
            disabled={
              errorMessage || (
                (activeStep === 0 && !selectedUserCheckoutAddress) ||
                (activeStep === 1 && !paymentMethod)
              )
            }
            className={`bg-custom-blue font-semibold px-6 h-10 rounded-md text-white
              ${
                errorMessage ||
                (activeStep === 0 && !selectedUserCheckoutAddress) ||
                (activeStep === 1 && !paymentMethod)
                  ? "opacity-60"
                  : ""
              }`}
            onClick={handleNext}>
            Proceed
          </button>
        )}
      </div>

      {/* Error message (if any) */}
      {errorMessage && <ErrorPage message={errorMessage} />}
    </div>
  );
};

export default Checkout;
