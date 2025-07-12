// Import Headless UI components and required libraries
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

// Reusable modal component for displaying address form
const AddressInfoModal = ({ open, setOpen, children }) => {
  return (
    // Headless UI <Dialog> for accessible modal behavior
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">

      {/* Modal backdrop (dark transparent overlay behind modal) */}
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      {/* Container that centers the modal panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        
        {/* Modal panel (box where content is displayed) */}
        <DialogPanel className="relative w-full max-w-md mx-auto transform overflow-hidden bg-white rounded-lg shadow-xl transition-all">
          
          {/* Padding container for dynamic children (like the form) */}
          <div className='px-6 py-6'>
            {children}
          </div>

          {/* Close button in the top-right corner */}
          <div className='flex justify-end gap-4 absolute right-4 top-2'>
            <button onClick={() => setOpen(false)} type='button'>
              <FaTimes className='text-slate-700' size={25} />
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AddressInfoModal;
