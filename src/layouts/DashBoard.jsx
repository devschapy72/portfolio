import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'


const DashBoard = ({children}) => {
  return (
    <div className='min-h-screen'>
        <Header/>
        <div className="min-h-[calc(100vh-108px)] py-10">
            {children}
        </div>
        <Footer/>

    </div>
  )
}

export default DashBoard