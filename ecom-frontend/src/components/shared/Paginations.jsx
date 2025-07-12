// Import necessary hooks and components
import { Pagination } from "@mui/material"; // MUI Pagination component
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"; // For handling routing and query params

const Paginations = ({ numberOfPage, totalProducts }) => {
    // Extract query params from the current URL
    const [searchParams] = useSearchParams();

    // Get current path (e.g., "/products")
    const pathname = useLocation().pathname;

    // Create a copy of current URLSearchParams to manipulate
    const params = new URLSearchParams(searchParams);

    // Hook to programmatically navigate to another route
    const navigate = useNavigate();

    // Get current page number from query param, default to 1 if not found
    const paramValue = searchParams.get("page")
        ? Number(searchParams.get("page"))
        : 1;

    // Called when user changes the page using Pagination component
    const onChangeHandler = (event, value) => {
        // Set/update the "page" parameter in the URL
        params.set("page", value.toString());

        // Navigate to the same path with updated query params
        navigate(`${pathname}?${params}`);
    };

    return (
        <Pagination 
            count={numberOfPage}         // Total number of pages
            page={paramValue}            // Current page
            defaultPage={1}              // Initial page if none is selected
            siblingCount={0}             // No pages between current and boundary shown
            boundaryCount={2}            // Show 2 pages at start and end
            shape="rounded"              // Rounded buttons
            onChange={onChangeHandler}   // Callback when page is changed
        />
    );
};

export default Paginations;
