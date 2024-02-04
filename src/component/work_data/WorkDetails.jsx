import React from 'react'
const WorkDetails = ({ titel, date, responsibilities}) => {
  return ( 
    <div className='border-2 border-[#6751b9] rounded-lg mt-3 p-[1rem] sm:p-[1.5rem]'>
        <h6 className='text-sm md:text-lg xl:text-xl font-serif font-medium mb-3'>{titel}</h6>
        <p className='text-[12px] md:text-sm bg-[#6751b9] px-3 py-1 rounded-md inline-block mb-2'>{date}</p>           
            {
              responsibilities.map((item) => {
                return <li 
                key={item} 
                className='list-disc text-[13px] lg:text-sm mb-2'
                >
                  {item} 
                </li>
               })
            }            
        </div>   
  )
}
export default WorkDetails