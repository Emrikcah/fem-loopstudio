import React from 'react'

const Button = ({isMobile}) => {
  return (
   <button className={`px-9 py-2 my-0  font-alata  text-sm tracking-[5px] uppercase border-[1px] border-black hover:bg-black hover:text-white ${isMobile ? 'justify-self-center md:col-span-full lg:hidden  ':'hidden lg:block'}`}>see all</button>
  )
}

export default Button