import React from 'react'
import NavLinks from '@components/Nav/NavLinks'

const Nav = ({MdMenu,handleOpen,isOpen}) => {
  return (
    <nav className="font-bold text-white  ">
    <ul className="grid grid-cols-13 gap-5 hidden lg:flex">
      <NavLinks/>
    </ul>
    <MdMenu
            onClick={handleOpen}
            size={35}
            color="white"
            className={`lg:hidden ${isOpen ? "hidden" : ""}`}
          />
  </nav>
  )
}

export default Nav