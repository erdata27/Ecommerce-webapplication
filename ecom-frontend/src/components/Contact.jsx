import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa"; // Importing icons for contact info

const Contact = () => {
    return (
        // Main container for the Contact page
        <div
            className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center"
            style={{ backgroundImage: "url('')" }} // Optional background image
        >
            {/* White box container */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                
                {/* Heading and subtext */}
                <h1 className="text-4xl font-bold text-center mb-6">Contact us</h1>
                <p className="text-gray-600 text-center mb-4">
                    We would love to hear from you! Please fill out the form below or contact us directly
                </p>

                {/* Contact Form */}
                <form className="space-y-4">
                    {/* Name input field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input 
                            type="text"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email input field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input 
                            type="email"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Message input field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea 
                            rows="4"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit button */}
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                        Send Message
                    </button>
                </form>

                {/* Contact Information Section */}
                <div className="mt-8 text-center">
                    <h2 className="text-lg font-semibold">Contact Information</h2>

                    {/* Contact details with icons */}
                    <div className="flex flex-col items-center space-y-2 mt-4">
                        {/* Phone number */}
                        <div className="flex items-center">
                            <FaPhone className="text-blue-500 mr-2"/>
                            <span className="text-gray-600">9398508857</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center">
                            <FaEnvelope className="text-blue-500 mr-2"/>
                            <span className="text-gray-600">reswar1437@gmail.com</span>
                        </div>

                        {/* Address */}
                        <div className="flex items-center">
                            <FaMapMarkedAlt className="text-blue-500 mr-2"/>
                            <span className="text-gray-600">Guntur, Andhra Pradesh, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
