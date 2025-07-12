// Importing necessary libraries and components
import { Avatar, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { BiUser } from 'react-icons/bi'; // User icon
import { FaShoppingCart } from 'react-icons/fa'; // Cart icon
import { IoExitOutline } from 'react-icons/io5'; // Logout icon
import { useDispatch, useSelector } from 'react-redux'; // For Redux state and actions
import { Link, useNavigate } from 'react-router-dom'; // Routing
import BackDrop from './BackDrop'; // Optional UI component that dims background
import { logOutUser } from '../store/actions'; // Redux logout action

const UserMenu = () => {
  // State to manage whether the menu is open or not
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl); // Menu open condition

  const { user } = useSelector((state) => state.auth); // Getting logged-in user
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Open menu on avatar click
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Logout action dispatch
  const logOutHandler = () => {
    dispatch(logOutUser(navigate));
  };

  return (
    <div className='relative z-30'>
      {/* Avatar icon to toggle menu */}
      <div
        className='sm:border sm:border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700'
        onClick={handleClick}
      >
        <Avatar alt='Menu' src='' /> {/* Avatar can include user image */}
      </div>

      {/* Dropdown menu component from MUI */}
      <Menu
        sx={{ width: "400px" }}
        id="basic-menu"
        anchorEl={anchorEl} // Anchor for positioning
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: { width: 160 },
        }}
      >
        {/* Profile link */}
        <Link to="/profile">
          <MenuItem className="flex gap-2" onClick={handleClose}>
            <BiUser className='text-xl' />
            <span className='font-bold text-[16px] mt-1'>
              {user?.username}
            </span>
          </MenuItem>
        </Link>

        {/* Orders page link */}
        <Link to="/profile/orders">
          <MenuItem className="flex gap-2" onClick={handleClose}>
            <FaShoppingCart className='text-xl' />
            <span className='font-semibold'>Order</span>
          </MenuItem>
        </Link>

        {/* Logout button */}
        <MenuItem className="flex gap-2" onClick={logOutHandler}>
          <div className='font-semibold w-full flex gap-2 items-center bg-button-gradient px-4 py-1 text-white rounded-xs'>
            <IoExitOutline className='text-xl' />
            <span className='font-bold text-[16px] mt-1'>LogOut</span>
          </div>
        </MenuItem>
      </Menu>

      {/* Dim background when menu is open */}
      {open && <BackDrop />}
    </div>
  );
};

export default UserMenu;
