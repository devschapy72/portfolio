import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='h-16 bg-[#1c1a32] flex justify-between items-center px-5 sm:px-16'>
        <h3 className='text-2xl font-mono font-extrabold '>Portfolio</h3>
         <Nav/>
    </div>
  )
}

export default Header