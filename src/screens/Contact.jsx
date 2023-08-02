import React from 'react'
import { Link } from 'react-router-dom'
import { PiPaperPlaneRightFill } from 'react-icons/pi'
import { BiPhoneCall } from 'react-icons/bi'
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Contact = () => {
  return (
    <div className='background-image pt-24 h-[92vh]'>
      <div className='pt-[70px] max-sm:pt-[55px] text-white'>
        <div className='grid grid-flow-col'>
          <div className='px-28'>
            <h2 className='text-center text-3xl font-semibold'>Contact <span className='text-cyan-400'>Me</span></h2>
            <p className='font-semibold mt-4'>Let's Work Together</p>
            <p className='mt-5'> Seeking new opportunities to contribute my expertise in frontend development to a dynamic and innovative team. If you have any job openings in the Frontend Development domain then contact me, I would love to discuss how my skills and experiences align with your company's needs.</p>
            <div className='mt-5'>
            <Link to={'mailto: rahulsharma11958@gmail.com'}><PiPaperPlaneRightFill className='float-left mt-1 mr-2' />rahulsharma11958@gmail.com</Link>
            <br />
            <Link to={'tel:+919520825495'}><BiPhoneCall className='float-left mt-1 mr-2'/>9520825495</Link>
            </div>
            <div className="flex w-64 justify-between mt-10">
          <Link target="_blank"  to='https://www.linkedin.com/in/rahul-sharma-a85b44251/'><BiLogoLinkedin className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-12 h-12 p-1" /></Link>
            <Link target='_blank' to="https://wa.me/9520825495"><FaWhatsapp className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-12 h-12 p-1" /></Link>
            <Link target='_blank' to={'https://www.instagram.com/rahul_sharma.pandit/'}><AiOutlineInstagram className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-12 h-12 p-1" /></Link>
            <Link target='_blank' to={'mailto: rahulsharma11958@gmail.com'}><BiLogoGmail className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-12 h-12 p-1" /></Link>
          </div>
          </div>
          <div className=''>
            <form action="" className='w-[100vh]'>

              <div class="mb-6">
                <input type="text" id="default-input" placeholder='Enter Your Name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" />
                <input type="text" id="default-input" placeholder='Enter Your Gmail' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" />
                <input type="text" id="default-input" placeholder='Enter Your Subject' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" />
                <textarea type="text" placeholder='Enter your message' rows="6" cols="50" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" />
              </div>
              <button type="button" class="text-black focus:outline-none focus:ring-4 font-medium rounded-full text-sm w-[100%] py-2.5 text-center mb-2 dark:bg-cyan-400 dark:hover:bg-cyan-500">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact