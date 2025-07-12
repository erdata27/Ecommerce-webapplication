// Import required libraries and components
import React, { useEffect } from 'react'
import InputField from '../shared/InputField' // Reusable form input component
import { useForm } from 'react-hook-form'; // Form handling hook
import { FaAddressCard } from 'react-icons/fa'; // Address icon
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks
import Spinners from '../shared/Spinners'; // Loading spinner
import toast from 'react-hot-toast'; // For showing toast notifications
import { addUpdateUserAddress } from '../../store/actions'; // Action for saving/updating address

// Component for adding or updating an address
const AddAddressForm = ({ address, setOpenAddressModal }) => {
    const dispatch = useDispatch();

    // Get loader state from Redux store
    const { btnLoader } = useSelector((state) => state.errors);

    // Set up form with react-hook-form
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        mode: "onTouched", // Show validation errors on blur/touch
    });

    // Handler to dispatch action when form is submitted
    const onSaveAddressHandler = async (data) => {
        dispatch(
            addUpdateUserAddress(
                data,
                toast,
                address?.addressId,         // If addressId is present => Update
                setOpenAddressModal         // Used to close modal after saving
            )
        );
    };

    // If editing an address, pre-fill the form fields using useEffect
    useEffect(() => {
        if (address?.addressId) {
            setValue("buildingName", address?.buildingName);
            setValue("city", address?.city);
            setValue("street", address?.street);
            setValue("state", address?.state);
            setValue("pincode", address?.pincode);
            setValue("country", address?.country);
        }
    }, [address]);

    return (
        <div className="">
            {/* Address Form */}
            <form onSubmit={handleSubmit(onSaveAddressHandler)}>
                
                {/* Heading with icon */}
                <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
                    <FaAddressCard className="mr-2 text-2xl" />
                    {!address?.addressId ? "Add Address" : "Update Address"}
                </div>

                {/* All Input Fields */}
                <div className="flex flex-col gap-4">
                    <InputField
                        label="Building Name"
                        required
                        id="buildingName"
                        type="text"
                        message="*Building Name is required"
                        placeholder="Enter Building Name"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="City"
                        required
                        id="city"
                        type="text"
                        message="*City is required"
                        placeholder="Enter City"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="State"
                        required
                        id="state"
                        type="text"
                        message="*State is required"
                        placeholder="Enter State"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Pincode"
                        required
                        id="pincode"
                        type="text"
                        message="*Pincode is required"
                        placeholder="Enter Pincode"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Street"
                        required
                        id="street"
                        type="text"
                        message="*Street is required"
                        placeholder="Enter Street"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Country"
                        required
                        id="country"
                        type="text"
                        message="*Country is required"
                        placeholder="Enter Country"
                        register={register}
                        errors={errors}
                    />
                </div>

                {/* Submit Button */}
                <button
                    disabled={btnLoader}
                    className="text-white bg-custom-blue px-4 py-2 rounded-md mt-4"
                    type="submit"
                >
                    {btnLoader ? (
                        <>
                            <Spinners /> Loading...
                        </>
                    ) : (
                        <>Save</>
                    )}
                </button>
            </form>
        </div>
    );
};

export default AddAddressForm;
