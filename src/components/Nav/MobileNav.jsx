import React from "react";
import NavLinks from "@components/Nav/NavLinks";

const MobileNav = ({ MdClose, handleClose }) => {
  return (
    <nav className="font-bold text-white lg:hidden absolute top-0 bottom-0 left-0 self-end w-full min-h-screen text-lg uppercase bg-black  ">
      <div className="section-container py-16">
        <div className="flex justify-between">
          <NavLinks />

          <MdClose
            onClick={handleClose}
            size={30}
            color="white"
            className="lg:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
