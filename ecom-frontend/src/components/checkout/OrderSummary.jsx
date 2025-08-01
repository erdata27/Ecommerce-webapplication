import React from 'react'
import { formatPriceCalculation } from '../../utils/formatPrice'

// OrderSummary component shows address, payment, cart items, and cost breakdown
const OrderSummary = ({ totalPrice, cart, address, paymentMethod }) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="flex flex-wrap">
        {/* Left side: Billing and Order Details */}
        <div className="w-full lg:w-8/12 pr-4">
          <div className="space-y-4">

            {/* Billing Address Section */}
            <div className="p-4 border rounded-lg shadow-xs">
              <h2 className='text-2xl font-semibold mb-2'>Billing Address</h2>
              <p><strong>Building Name: </strong>{address?.buildingName}</p>
              <p><strong>City: </strong>{address?.city}</p>
              <p><strong>Street: </strong>{address?.street}</p>
              <p><strong>State: </strong>{address?.state}</p>
              <p><strong>Pincode: </strong>{address?.pincode}</p>
              <p><strong>Country: </strong>{address?.country}</p>
            </div>

            {/* Payment Method Section */}
            <div className='p-4 border rounded-lg shadow-xs'>
              <h2 className='text-2xl font-semibold mb-2'>Payment Method</h2>
              <p><strong>Method: </strong>{paymentMethod}</p>
            </div>

            {/* Ordered Items List */}
            <div className='pb-4 border rounded-lg shadow-xs mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>Order Items</h2>
              <div className='space-y-2'>
                {cart?.map((item) => (
                  <div key={item?.productId} className='flex items-center gap-3'>
                    {/* Product image */}
                    <img
                      src={`${import.meta.env.VITE_BACK_END_URL}/images/${item?.image}`}
                      alt='Product'
                      className='w-12 h-12 rounded-sm'
                    />
                    {/* Product name and pricing */}
                    <div className='text-gray-500'>
                      <p>{item?.productName}</p>
                      <p>
                        {item?.quantity} x ${item?.specialPrice} = $
                        {formatPriceCalculation(item?.quantity, item?.specialPrice)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Price Summary */}
        <div className="w-full lg:w-4/12 mt-4 lg:mt-0">
          <div className="border rounded-lg shadow-xs p-4 space-y-4">
            <h2 className="text-2xl font-semibold mb-2">Order Summary</h2>

            <div className="space-y-2">
              {/* Product Total */}
              <div className="flex justify-between">
                <span>Products</span>
                <span>${formatPriceCalculation(totalPrice, 1)}</span>
              </div>

              {/* Placeholder for tax */}
              <div className="flex justify-between">
                <span>Tax (0%)</span>
                <span>$0.00</span>
              </div>

              {/* Final Subtotal */}
              <div className="flex justify-between font-semibold">
                <span>SubTotal</span>
                <span>${formatPriceCalculation(totalPrice, 1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
