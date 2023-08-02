import React, {useState} from "react";
import { Link } from "react-router-dom";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { MdOutlineContactPage } from "react-icons/md";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { RxHamburgerMenu ,RxCross2 } from "react-icons/rx";
import "../Style/home.css";


const NavBar = () => {
  const [inMobile, setInMobile] = useState(false);
  return (
      <div className="fixed w-full flex justify-between items-center text-[22px] h-[70px] max-sm:h-[55px] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm text-white max-sm:text-lg z-10">
        <div className="">
          <Link to={'/'}><h1 className="font-bold ml-12 max-sm:ml-3 mt mr-8">Portfolio</h1></Link>
        </div>
        <div className={inMobile ? 'nav-navbar-mobile main-navbar' : 'main-navbar'}
        >
          
          <Link className="hover:text-cyan-300 mr-9" to="/" onClick={() => {setInMobile(false)}}>
            <AiOutlineHome className="float-left mt-[6px] mr-[1px]" />
            Home
          </Link>

          <Link className="hover:text-cyan-300 mr-9" to="/about" onClick={() => {setInMobile(false)}}>
            <AiOutlineUser className="float-left mt-[6px] mr-[1px] " />
            About
          </Link>
          <Link className="hover:text-cyan-300 mr-9" to="/Projects" onClick={() => {setInMobile(false)}}>
            <AiOutlineFundProjectionScreen className="float-left mt-[6px] mr-[1px]" />
            Projects
          </Link>
          <Link className="hover:text-cyan-300 mr-9" to="/resume" onClick={() => {setInMobile(false)}}>
            <CgFileDocument className="float-left mt-[6px] mr-[1px]" />
            Resume
          </Link>
          <Link className="hover:text-cyan-300 mr-9" to="/contact" onClick={() => {setInMobile(false)}}>
            <MdOutlineContactPage className="float-left mt-[6px] mr-[1px]" />
            Contact
          </Link>
          <Link to={'https://github.com/RahulSharma011'} target="_blank">
          <button className="flex border py-1.5 px-2.5 rounded-sm">
            <CgGitFork />
            <AiFillStar />
          </button>
          </Link>
        </div>
        <div className="hamburger" onClick={() => {setInMobile(!inMobile)}}>{inMobile?<RxCross2 /> : <RxHamburgerMenu />}</div>
      </div>
  );
};

export default NavBar;
