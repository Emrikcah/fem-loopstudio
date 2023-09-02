import React, { useEffect, useState } from "react";
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

  //disable scroll when isOpen is true
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-disabled')
    }else{
     document.body.classList.remove('scroll-disabled')

    }
  
    return () => {
     document.body.classList.remove('scroll-disabled')
    }
  }, [isOpen])
  

  return (
    <header id="header" className="header ">
     
        <div className="flex justify-between items-center ">
          <div className="w-36 lg:w-48">
            <img src={logo} alt="logo"  />
          </div>
          {/* nav */}
          <Nav MdMenu={MdMenu} isOpen={isOpen} handleOpen={handleOpen} />
          {/* nav end */}

         {/* mobile nav */}
          {isOpen && <MobileNav MdClose={MdClose} handleClose={handleClose} />}
          {/* mobile nav end */}
        </div>
      
    </header>
  );
};

export default Header;
//Todo: move mdmenu into nav