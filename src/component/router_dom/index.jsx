import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import WorkExperience from '../WorkExperience'
import Contact from '../Contact'
import Error from '../Error'
import Skill from '../Skill'




const Routepath = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/work' element={<WorkExperience/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
  )
}

export default Routepath