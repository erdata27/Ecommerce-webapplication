import React from 'react'
// Error icon from FontAwesome
import { FaExclamationTriangle } from 'react-icons/fa'

// Functional component taking a `message` prop
const ErrorPage = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center px-6 py-14'>
        {/* Icon */}
        <FaExclamationTriangle className='text-red-500 text-6xl mb-4' />
        
        {/* Message */}
        <p className='text-gray-600 mb-6 text-center'>
            {message ? message : "An unexpected error has occurred"}
        </p>
    </div>
  )
}

export default ErrorPage;
