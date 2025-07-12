// Import MUI Alert components and React
import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

// This component shows a warning message when PayPal is not available
const PaypalPayment = () => {
  return (
    // Container with height and center alignment
    <div className='h-96 flex justify-center items-center'>
      
      {/* Alert from MUI with "warning" severity and filled style */}
      <Alert severity="warning" variant='filled' style={{ maxWidth: "400px" }}>
        <AlertTitle>Paypal Unavailable</AlertTitle>
        Paypal payment is unavailable. Please use another payment method.
      </Alert>
    </div>
  )
}

export default PaypalPayment
