import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <header className='flex py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt='logo' />
      <button
        onClick={() => setToken("")}
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
