// Import necessary modules and components
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Divider } from '@mui/material';
import { useState } from 'react';
import Status from './Status'; // Custom component to show stock status
import { MdClose, MdDone } from 'react-icons/md';

function ProductViewModal({ open, setOpen, product, isAvailable }) {
  // Destructure product details
  const { id, productName, image, description, quantity, price, discount, specialPrice } = product;

  // Optional open trigger function (unused currently)
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {/* Main Dialog component from Headless UI */}
      <Dialog open={open} as="div" className="relative z-10" onClose={setOpen}>
        {/* Backdrop overlay */}
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        {/* Modal Container */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Main Dialog Panel */}
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-[620px] md:min-w-[620px] w-full"
            >
              {/* Product Image Section */}
              {image && (
                <div className='flex justify-center aspect-3/2'>
                  <img src={image} alt={productName} />
                </div>
              )}

              {/* Product Details Section */}
              <div className='px-6 pt-10 pb-2'>
                {/* Product Name */}
                <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 mb-4">
                  {productName}
                </DialogTitle>

                {/* Price and Availability Info */}
                <div className="space-y-2 text-gray-700 pb-4">
                  <div className="flex items-center justify-between gap-2">
                    {/* Show special price if available, else original price */}
                    {specialPrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through">
                          ${Number(price).toFixed(2)}
                        </span>
                        <span className="sm:text-xl font-semibold text-slate-700">
                          ${Number(specialPrice).toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-bold">
                        ${Number(price).toFixed(2)}
                      </span>
                    )}

                    {/* Stock status */}
                    {isAvailable ? (
                      <Status
                        text="In Stock"
                        icon={MdDone}
                        bg="bg-teal-200"
                        color="text-teal-900"
                      />
                    ) : (
                      <Status
                        text="Out-Of-Stock"
                        icon={MdClose}
                        bg="bg-rose-200"
                        color="text-rose-700"
                      />
                    )}
                  </div>

                  {/* Horizontal Divider */}
                  <Divider />

                  {/* Product Description */}
                  <p>{description}</p>
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="px-6 py-4 flex justify-end gap-4">
                <button
                  onClick={() => setOpen(false)} // Close modal
                  type="button"
                  className="px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-700 hover:text-slate-800 hover:border-slate-800 rounded-md "
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ProductViewModal;
