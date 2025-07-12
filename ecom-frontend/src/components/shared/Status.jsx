// Status component to display product availability or any custom status with an icon and color styling
const Status = ({ text, icon: Icon, bg, color }) => {
    return (
        <div
            // Dynamically applying background color and text color using Tailwind utility classes passed as props
            className={`${bg} ${color} px-2 py-2 font-medium rounded-sm flex items-center gap-1`}>
            
            {/* Displaying the status text */}
            {text} 
            
            {/* Displaying the icon next to the text with a fixed size of 15px */}
            <Icon size={15} />
        </div>
    );
};

export default Status;
