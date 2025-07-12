// Importing the axios library to make HTTP requests
import axios from "axios";

// Creating a custom axios instance for API calls
const api = axios.create({
    // Setting the base URL for all API requests
    // `import.meta.env.VITE_BACK_END_URL` pulls the backend URL from your Vite environment variables
    // `/api` is appended to target the API route
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
    
    // Sends cookies with each request (used for authentication/session handling)
    withCredentials: true,
});

// Exporting the custom axios instance so it can be used throughout the app
export default api;
