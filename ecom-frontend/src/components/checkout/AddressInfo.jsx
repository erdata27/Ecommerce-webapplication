// Import necessary hooks, components, and utilities
import React, { useState } from 'react'
import Skeleton from '../shared/Skeleton'; // Placeholder for loading state
import { FaAddressBook } from 'react-icons/fa'; // Icon for empty address state
import AddressInfoModal from './AddressInfoModal'; // Wrapper for modal
import AddAddressForm from './AddAddressForm'; // Form to add/update address
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks
import AddressList from './AddressList'; // Component that shows list of saved addresses
import { DeleteModal } from './DeleteModal'; // Confirmation modal for delete action
import toast from 'react-hot-toast'; // For showing user notifications
import { deleteUserAddress } from '../../store/actions'; // Action to delete address

// Main AddressInfo component
const AddressInfo = ({ address }) => {
    // Local state to control modals and selected address
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");

    const dispatch = useDispatch();

    // Handler to open the address form for adding a new address
    const addNewAddressHandler = () => {
        setSelectedAddress("");           // Clear previously selected address
        setOpenAddressModal(true);        // Open the modal
    };

    // Handler to delete selected address using Redux action
    const deleteAddressHandler = () => {
        dispatch(
            deleteUserAddress(
                toast,
                selectedAddress?.addressId,
                setOpenDeleteModal // Close modal after delete
            )
        )
    };

    // Check if no address exists
    const noAddressExist = !address || address.length === 0;

    // Access global loading and button loader state
    const { isLoading, btnLoader } = useSelector((state) => state.errors);

    return (
        <div className='pt-4'>
            {/* If user has no addresses saved */}
            {noAddressExist ? (
                <div className='p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center'>
                    <FaAddressBook size={50} className='text-gray-500 mb-4' />
                    <h1 className='mb-2 text-slate-900 text-center font-semibold text-2xl'>
                        No Address Added Yet
                    </h1>
                    <p className='mb-6 text-slate-800 text-center'>
                        Please add your address to complete purchase
                    </p>

                    {/* Add Address Button */}
                    <button
                        onClick={addNewAddressHandler}
                        className='px-4 py-2 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700 transition-all'
                    >
                        Add Address
                    </button>
                </div>
            ) : (
                // If addresses exist
                <div className='relative p-6 rounded-lg max-w-md mx-auto'>
                    <h1 className='text-slate-800 text-center font-bold text-2xl'>
                        Select Address
                    </h1>

                    {/* Show Skeleton while loading */}
                    {isLoading ? (
                        <div className='py-4 px-8'>
                            <Skeleton />
                        </div>
                    ) : (
                        <>
                            {/* Render list of addresses */}
                            <div className='space-y-4 pt-6'>
                                <AddressList 
                                    addresses={address}
                                    setSelectedAddress={setSelectedAddress}
                                    setOpenAddressModal={setOpenAddressModal}
                                    setOpenDeleteModal={setOpenDeleteModal}
                                />
                            </div>

                            {/* Button to add more addresses */}
                            {address.length > 0 && (
                                <div className='mt-4'>
                                    <button 
                                        onClick={addNewAddressHandler}
                                        className='px-4 py-2 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700 transition-all'
                                    >
                                        Add More
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}

            {/* Modal for Add / Update Address Form */}
            <AddressInfoModal
                open={openAddressModal}
                setOpen={setOpenAddressModal}
            >
                <AddAddressForm 
                    address={selectedAddress}
                    setOpenAddressModal={setOpenAddressModal}
                />
            </AddressInfoModal>

            {/* Modal for confirming delete address */}
            <DeleteModal 
                open={openDeleteModal}
                loader={btnLoader}
                setOpen={setOpenDeleteModal}
                title="Delete Address"
                onDeleteHandler={deleteAddressHandler}
            />
        </div>
    )
}

export default AddressInfo;
