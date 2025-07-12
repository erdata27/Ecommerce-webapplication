// Button styles used for both + and - buttons
const btnStyles = "border-[1.2px] border-slate-800 px-3 py-1 rounded-sm";

// SetQuantity component to control item quantity
const SetQuantity = ({
    quantity,           // Current quantity of the item
    cardCounter,        // Boolean to control label visibility (for card or not)
    handeQtyIncrease,   // Function to increase quantity
    handleQtyDecrease,  // Function to decrease quantity
}) => {
    return (
        // Wrapper: Aligns quantity controls horizontally
        <div className="flex gap-8 items-center">
            {/* Label (only visible when not in cardCounter mode) */}
            {cardCounter ? null : <div className="font-semibold">QUANTITY</div>}

            {/* Quantity controls (responsive design) */}
            <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm">
                
                {/* Decrease button (disabled if quantity is 1) */}
                <button
                    disabled={quantity <= 1}
                    className={btnStyles}
                    onClick={handleQtyDecrease}
                >
                    -
                </button>

                {/* Quantity Display */}
                <div className="text-red-500">{quantity}</div>

                {/* Increase button */}
                <button
                    className={btnStyles}
                    onClick={handeQtyIncrease}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default SetQuantity;
