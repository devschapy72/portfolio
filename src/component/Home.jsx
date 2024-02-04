import React from 'react'
import Hero from './Hero'
import Skill from './Skill'
import WorkExperience from './WorkExperience'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='space-y-14'>
        <Hero/>
        <Skill/>
        <WorkExperience/>
        <Contact/>
    </div>
  )
}

export default Home