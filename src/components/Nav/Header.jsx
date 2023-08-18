import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { MdMenu, MdClose } from "react-icons/md";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => { 
    setIsOpen(true)
   }
  const handleClose = () => { 
    setIsOpen(false)
   }

  return (
    <header id="header" className="header ">
      <div className="flex justify-between items-center ">
        <div className="navbar-brand">
          <img src={logo} alt="logo" className="" />
        </div>
        {/* nav */}
        <nav className="font-bold text-white hidden lg:flex ">
          <ul className="grid grid-cols-13 gap-5">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        {/* nav end */}
        
        <MdMenu onClick={handleOpen} size={25} color="white" className="md:hidden"  />
        {isOpen && (
          <nav className="font-bold text-white  ">
            <ul className="">
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
            <MdClose onClick={handleClose} size={25} color="white" className="md:hidden" />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

