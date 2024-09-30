import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const {
    setShowSearch,
    setToken,
    setCartItems,
    getCartCount,
    token,
    navigate,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <header>
      <nav className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'>
          <img className='w-36' src={assets.logo} alt='logo' />
        </Link>
        <ul className='hidden sm:flex text-sm gap-5 text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='hidden h-0.5 w-3/4 border-none bg-gray-700' />
          </NavLink>
          <NavLink
            to='/collections'
            className='flex flex-col items-center gap-1'
          >
            <p>COLLECTIONS</p>
            <hr className='hidden h-0.5 w-3/4 border-none bg-gray-700' />
          </NavLink>{" "}
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className=' hidden h-0.5 w-3/4 border-none bg-gray-700' />
          </NavLink>{" "}
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className=' hidden h-0.5 w-3/4 border-none bg-gray-700' />
          </NavLink>{" "}
        </ul>

        <div className='flex items-center gap-6'>
          <img
            onClick={() => setShowSearch(true)}
            className='w-5 cursor-pointer'
            src={assets.search_icon}
            alt='search icon'
          />

          <div className='group relative'>
            <img
              onClick={() => (token ? null : navigate("/login"))}
              className='w-5 min-w-5 cursor-pointer'
              src={assets.profile_icon}
              alt='profile icon'
            />

            {token && (
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-3 drop-shadow-xl '>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-50 text-slate-700 rounded'>
                  <p className='cursor-pointer hover:text-black'>My Profile</p>
                  <p
                    onClick={() => navigate("/orders")}
                    className='cursor-pointer hover:text-black'
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className='cursor-pointer hover:text-black'
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
          <Link to='/cart' className='relative'>
            <img
              className='w-5 min-w-5'
              src={assets.cart_icon}
              alt='cart icon'
            />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-gray-900 text-white aspect-square leading-4 rounded-full text-[8px]'>
              {getCartCount()}
            </p>
          </Link>
          {/* -------menu icon------- */}
          <img
            onClick={() => setOpenModal(true)}
            className='sm:hidden w-5 cursor-pointer'
            src={assets.menu_icon}
            alt='menu icon'
          />
        </div>

        {/* --------navbar sidebar for mobile screen----- */}

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            openModal ? "w-full" : "w-0"
          }`}
        >
          <div className='flex flex-col text-gray-600'>
            <div
              onClick={() => setOpenModal(false)}
              className='flex items-center gap-2 p-3 cursor-pointer'
            >
              <img
                className='h-4 rotate-180'
                src={assets.dropdown_icon}
                alt='dropdown icon'
              />
              <p className='text-sm text-gray-900'>Back</p>
            </div>

            <NavLink
              onClick={() => setOpenModal(false)}
              to='/'
              className='border py-2 pl-6'
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setOpenModal(false)}
              to='/collections'
              className='border py-2 pl-6'
            >
              COLLECTIONS
            </NavLink>
            <NavLink
              onClick={() => setOpenModal(false)}
              to='/about'
              className='border py-2 pl-6'
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setOpenModal(false)}
              to='/contact'
              className='border py-2 pl-6'
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
