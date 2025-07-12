// Importing required components and hooks
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPaymentMethod, createUserCart } from '../../store/actions';

const PaymentMethod = () => {
    const dispatch = useDispatch();

    // Extracting state from Redux store
    const { paymentMethod } = useSelector((state) => state.payment);  // selected payment method
    const { cart, cartId } = useSelector((state) => state.carts);     // cart items and ID
    const { isLoading, errorMessage } = useSelector((state) => state.errors); // error handling

    // Automatically create a cart on backend if it doesn't exist
    useEffect(() => {
        // Only create cart if:
        // - Cart has items
        // - No existing cartId
        // - No error occurred yet
        if (cart.length > 0 && !cartId && !errorMessage) {
            const sendCartItems = cart.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
            }));

            dispatch(createUserCart(sendCartItems));
        }
    }, [dispatch, cartId]); // cart is intentionally left out to prevent re-runs on item change

    // Handle payment method selection
    const paymentMethodHandler = (method) => {
        dispatch(addPaymentMethod(method));
    };

    return (
        <div className='max-w-md mx-auto p-5 bg-white shadow-md rounded-lg mt-16 border'>
            <h1 className='text-2xl font-semibold mb-4'>Select Payment Method</h1>

            {/* Radio input for payment method selection */}
            <FormControl>
                <RadioGroup
                    aria-label="payment method"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => paymentMethodHandler(e.target.value)}
                >
                    {/* Stripe Option */}
                    <FormControlLabel 
                        value="Stripe" 
                        control={<Radio color='primary' />} 
                        label="Stripe" 
                        className='text-gray-700'/>

                    {/* PayPal Option */}
                    <FormControlLabel 
                        value="Paypal" 
                        control={<Radio color='primary' />} 
                        label="Paypal" 
                        className='text-gray-700'/>
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default PaymentMethod;
