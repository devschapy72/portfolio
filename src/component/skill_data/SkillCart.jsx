import React from 'react'

const SkillCart = ({  title, iconUrl, isActive, onClick }) => {
  return (

<div className={`border-2 w-full h-[8rem] sm:h-[5.5rem] md:h-[8rem] lg:h-auto border-[#6751b9] flex justify-center items-center cursor-pointer duration-300 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 relative rounded-lg ${isActive ? "bg-gradient-to-r from-violet-500 to-fuchsia-500" : ""}`}
    onClick={onClick}
    >
        
    <div className='absolute top-[-1rem] left-[-1rem] w-[2.4rem] h-[2.4rem] bg-[#a796fee2]  flex justify-center items-center'>
    <p className='text-[#f4f3f6] text-xl'>{iconUrl}</p>
    </div>
    <p className='text-xl font-serif font-medium'>{title}</p>

    </div>
  )
}

export default SkillCart