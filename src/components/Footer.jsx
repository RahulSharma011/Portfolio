import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black h-14 text-white flex justify-around items-center max-md:flex-col max-md:h-full'>
        <div><p className='font-medium max-md:mb-2'>Design and Developed by Rahul Sharma</p></div>
        <div><p className='font-medium max-md:mb-2'>Copyright &copy; 2023 RS</p></div>
        <div className="flex w-64 justify-between max-md:mb-2 max-md:w-52">
        <Link target="_blank"  to='https://www.linkedin.com/in/rahul-sharma-a85b44251/'><BiLogoLinkedin className="text-white w-8 h-8 p-1" /></Link>
        <Link target='_blank' to="https://wa.me/9520825495"><FaWhatsapp className="text-white w-8 h-8 p-1" /></Link>
        <Link target='_blank' to={'https://www.instagram.com/rahul_sharma.pandit/'}><AiOutlineInstagram className="text-white w-8 h-8 p-1" /></Link>
        <Link target='_blank' to={'mailto: rahulsharma11958@gmail.com'}><BiLogoGmail className="text-white w-8 h-8 p-1" /></Link>
      </div>
    </div>
  )
}

export default Footer