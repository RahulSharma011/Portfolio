import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className='background-image'>
    <div className='pt-[70px] max-sm:pt-[55px] text-white'>
      <div>
        <div className='text-center mt-24'>
          <p className='text-4xl font-semibold'>My Recent <span className='text-purple-400'>Works</span></p>
          <p className='text-xl py-2'>Here are a few projects I've worked on recently</p>
        </div>
      </div>
      <div className='mt-16'>
        <ProjectCard />
      </div>
    </div>
    </div>
  )
}

export default Projects