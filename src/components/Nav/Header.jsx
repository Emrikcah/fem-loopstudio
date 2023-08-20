import React, { useState } from "react";
import logo from "@assets/logo.svg";
import { MdMenu, MdClose } from "react-icons/md";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header id="header" className="header ">
      <div className="">
        <div className="flex justify-between items-center ">
          <div className="navbar-brand">
            <img src={logo} alt="logo" className="" />
          </div>
          {/* nav */}
          <Nav MdMenu={MdMenu} isOpen={isOpen} handleOpen={handleOpen} />
          {/* nav end */}

         
          {isOpen && <MobileNav MdClose={MdClose} handleClose={handleClose} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
//Todo: move mdmenu into nav