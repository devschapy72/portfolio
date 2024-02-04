import React, { useState } from 'react'
import SkillData from './skill_data/SkillData'
import SkillCart from './skill_data/SkillCart'
import SkillInfoCard from './skill_data/SkillInfoCard'

const Skill = () => {

  const [activeSkill, setActiveSkill] = useState(SkillData[0]);

  return (
    <div className='w-10/12 sm:w-9/12 mx-auto '>
      <h3 className='mb-8 text-lg sm:text-2xl font-serif font-medium'>Technical Proficiency</h3>
    <div className='grid lg:grid-cols-2 gap-16'>
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-10'>
        {
            SkillData.map((items) => {
            return <SkillCart 
            key={items.title} 
            iconUrl={items.icon}
            title={items.title}
            isActive={activeSkill.title === items.title}
            onClick={() => setActiveSkill(items)}/>
            })
        }
    </div>

    <div>
      <SkillInfoCard 
      heading={activeSkill.title}
      skills={activeSkill.skills}/>
    </div>
  </div>
</div>
  )
}

export default Skill