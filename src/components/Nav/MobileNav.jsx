import React from "react";
import logo from "@assets/logo.svg";
import NavLinks from "@components/Nav/NavLinks";

const MobileNav = ({ MdClose, handleClose }) => {
   return (
      <nav className="font-bold text-white lg:hidden absolute top-0 bottom-0 left-0  w-full min-h-screen text-lg uppercase bg-black z-10 ">
         <div className="section-container px-5 py-10">
            <div className="grid grid-cols-[repeat(2,auto)] grid-rows-[repeat(2,auto)] justify-between items-end">
               <NavLinks styles="row-start-2 text-2xl font-light space-y-8  mt-40" />

               <img src={logo} alt="logo" className="w-36 " />

               <MdClose onClick={handleClose} size={30} color="white" className="lg:hidden  self-start" />
            </div>
         </div>
      </nav>
   );
};

export default MobileNav;
