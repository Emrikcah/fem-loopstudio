import React from 'react'

const Nav = ({MdMenu,handleOpen,isOpen}) => {
  return (
    <nav className="font-bold text-white  ">
    <ul className="grid grid-cols-13 gap-5 hidden lg:flex">
      <li>About</li>
      <li>Careers</li>
      <li>Events</li>
      <li>Products</li>
      <li>Support</li>
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