import React from 'react'
import Nav from './Nav'

const MobileNav = ({MdClose,handleClose}) => {
  return (
    <nav className="font-bold text-white lg:hidden ">
    <ul className="">
      <li>About</li>
      <li>Careers</li>
      <li>Events</li>
      <li>Products</li>
      <li>Support</li>
    </ul>
    <MdClose onClick={handleClose} size={25} color="white" className="lg:hidden" />
  </nav>
  )
}

export default MobileNav