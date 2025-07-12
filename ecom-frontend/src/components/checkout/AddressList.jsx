// Import required modules and icons
import React from 'react';
import { FaBuilding, FaCheckCircle, FaEdit, FaStreetView, FaTrash } from 'react-icons/fa';
import { MdLocationCity, MdPinDrop, MdPublic } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { selectUserCheckoutAddress } from '../../store/actions';

// Component to display a list of user addresses
const AddressList = ({ addresses, setSelectedAddress, setOpenAddressModal, setOpenDeleteModal }) => {
    const dispatch = useDispatch();

    // Get the currently selected address from Redux store
    const { selectedUserCheckoutAddress } = useSelector((state) => state.auth);

    // Triggered when the Edit button is clicked
    const onEditButtonHandler = (address) => {
        setSelectedAddress(address);          // Set the address to be edited
        setOpenAddressModal(true);            // Open the address edit modal
    };

    // Triggered when the Delete button is clicked
    const onDeleteButtonHandler = (address) => {
        setSelectedAddress(address);          // Set the address to be deleted
        setOpenDeleteModal(true);             // Open the delete confirmation modal
    };

    // Handle selection of an address (for checkout use)
    const handleAddressSelection = (address) => {
        dispatch(selectUserCheckoutAddress(address)); // Save selected address to store
    };

    return (
        <div className='space-y-4'>
            {/* Loop through all addresses */}
            {addresses.map((address) => (
                <div
                    key={address.addressId}
                    onClick={() => handleAddressSelection(address)} // Select this address
                    className={`p-4 border rounded-md cursor-pointer relative ${
                        selectedUserCheckoutAddress?.addressId === address.addressId
                        ? "bg-green-100"  // Highlight if selected
                        : "bg-white"
                    }`}
                >
                    {/* Address Content */}
                    <div className="flex items-start">
                        <div className="space-y-1">
                            {/* Building Name */}
                            <div className="flex items-center">
                                <FaBuilding size={14} className='mr-2 text-gray-600' />
                                <p className='font-semibold'>{address.buildingName}</p>

                                {/* Check icon if this address is selected */}
                                {selectedUserCheckoutAddress?.addressId === address.addressId && (
                                    <FaCheckCircle className='text-green-500 ml-2' />
                                )}
                            </div>

                            {/* Street */}
                            <div className="flex items-center">
                                <FaStreetView size={17} className='mr-2 text-gray-600' />
                                <p>{address.street}</p>
                            </div>

                            {/* City and State */}
                            <div className="flex items-center">
                                <MdLocationCity size={17} className='mr-2 text-gray-600' />
                                <p>{address.city}, {address.state}</p>
                            </div>

                            {/* Pincode */}
                            <div className="flex items-center">
                                <MdPinDrop size={17} className='mr-2 text-gray-600' />
                                <p>{address.pincode}</p>
                            </div>

                            {/* Country */}
                            <div className="flex items-center">
                                <MdPublic size={17} className='mr-2 text-gray-600' />
                                <p>{address.country}</p>
                            </div>
                        </div>
                    </div>

                    {/* Edit and Delete Buttons */}
                    <div className="flex gap-3 absolute top-4 right-2">
                        <button onClick={() => onEditButtonHandler(address)}>
                            <FaEdit size={18} className="text-teal-700" />
                        </button>
                        <button onClick={() => onDeleteButtonHandler(address)}>
                            <FaTrash size={17} className="text-rose-600" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AddressList;
