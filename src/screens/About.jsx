import React from 'react'
import { FaRegHandPointRight } from 'react-icons/fa'
import AboutImg from '../Assets/about.png';
import SkillData from '../components/SkillData';
import ToolData from '../components/ToolData';

const About = () => {
  return (
    <div className='background-image'>
      <div className='pt-[70px] max-sm:pt-[55px] text-white'>
        <div className='grid grid-flow-col mx-32 mt-20 max-lg:mx-16 max-md:grid-flow-row'>
          <div>
            <h1 className='text-4xl text-center font-semibold'>Know Who <span className='text-purple-400'>I'M</span></h1>
            <p className='text-[21px] font-semibold mt-16 mr-10'>
              Hi Everyone, I am <span className='text-purple-400'>Rahul Sharma</span> from <span className='text-purple-400'>Utter Pradesh, India.</span>
              I am a final year student pursuing an B.Tech with Computer Science Engineering.
              <br />
              Apart from coding, some other activities that I love to do!</p>
            <div className='mt-6'>
              <p className='text-xl mb-1'><FaRegHandPointRight className='inline text-xl mr-2' />Playing Games</p>
              <p className='text-xl mb-1'><FaRegHandPointRight className='inline text-xl mr-2' />Listening</p>
              <p className='text-xl mb-1'><FaRegHandPointRight className='inline text-xl mr-2' />Travelling</p>
            </div>
            <h2 className='text-center text-purple-300 text-2xl font-semibold mt-5'>'Strive to build things that make a difference!"</h2>
            <p className='text-center text-purple-300 text-2xl font-semibold'>— Rahul Sharma</p>
          </div>
          <div className='mt-20 max-md:m-auto max-md:mt-14'>
            <img className='w-[500px]' src={AboutImg} alt="" />
          </div>
        </div>
        <div className='mt-24'>
          <div className='mb-5'>
            <p className='text-center text-4xl font-bold'>Professional <span className='text-purple-400'>Skillset</span></p>
          </div>
          <div>
            <SkillData />
          </div>
          <div className='mb-5 mt-5'>
            <p className='text-center text-4xl font-bold'><span className='text-purple-400'>Tools I</span> Use</p>
          </div>
          <div>
            <ToolData />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About