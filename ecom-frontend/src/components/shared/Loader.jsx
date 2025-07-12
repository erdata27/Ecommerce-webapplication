// Importing a spinner component from 'react-loader-spinner'
import { RotatingLines } from "react-loader-spinner";

// Loader component to display a loading spinner and optional text
const Loader = ({ text }) => {
    return (
        // Centering the loader vertically and horizontally
        <div className="flex justify-center items-center w-full h-[450px]">
            <div className="flex flex-col items-center gap-1">
                {/* Spinner animation */}
                <RotatingLines
                    visible={true}              // Show spinner
                    height="96"                 // Height of spinner
                    width="96"                  // Width of spinner
                    color="red"                 // Spinner color
                    strokeWidth="5"             // Thickness of spinner lines
                    animationDuration="0.75"    // Speed of rotation
                    ariaLabel="rotating-lines-loading"  // Accessibility label
                    wrapperStyle={{}}           // Optional inline styles
                    wrapperClass=""             // Optional class name
                />

                {/* Optional loading text */}
                <p className="text-slate-800">
                    {/* If text is passed as prop, show it. Otherwise show default text */}
                    {text ? text : "Please wait...."}
                </p>
            </div>
        </div>
    );
}

export default Loader;
