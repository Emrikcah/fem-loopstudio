import React from 'react'
import NavLinks from '@components/Nav/NavLinks'

const MobileNav = ({MdClose,handleClose}) => {
  return (
    <nav className="font-bold text-white lg:hidden ">
    
      <NavLinks/>
   
    <MdClose onClick={handleClose} size={25} color="white" className="lg:hidden" />
  </nav>
  )
}

export default MobileNav