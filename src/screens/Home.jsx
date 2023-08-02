import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin,BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
// import background from "../Assets/home-bg.jpg";
import homeMain from "../Assets/home-main.svg";
import "../Style/home.css";
import Avatar from "../Assets/avatar.svg";

const Home = () => {
  return (
    <div className="background-image">
      <div className="grid grid-flow-col pt-36 max-sm:pt-14 max-md:grid-flow-row max-md:pt-28">
        <div className=" text-white flex flex-col justify-center ml-[100px] max-sm:mx-5">
          <div className="font-bold mb-4">
            <h2 className="text-2xl max-sm:text-lg max-sm:mt-5">
              Hello, It's Me
            </h2>
            <h2 className="text-4xl max-sm:text-2xl">Rahul Sharma</h2>
            <h3 className="text-2xl max-sm:text-lg">
              And I'm a{" "}
              <span className="text-cyan-400">Frontend Developer</span>
            </h3>
          </div>
          <div className="mb-5 max-sm:text-sm">
            <p className="font-semibold space">
            I am dedicated and motivated B.Tech Computer Science 4th-year student
            <br /> seeking an internship opportunity in Frontend Development.
            <br /> Eager to leverage my technical skills and passion for coding to
            <br /> contribute to innovative projects while gaining valuable industry experience.
            </p>
          </div>
          <div className="flex w-60 justify-between mb-7">
            <Link target="_blank"  to='https://www.linkedin.com/in/rahul-sharma-a85b44251/'><BiLogoLinkedin className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-10 h-10 p-1" /></Link>
            <Link target='_blank' to="https://wa.me/9520825495"><FaWhatsapp className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-10 h-10 p-1" /></Link>
            <Link target='_blank' to={'https://www.instagram.com/rahul_sharma.pandit/'}><AiOutlineInstagram className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-10 h-10 p-1" /></Link>
            <Link target='_blank' to={'mailto: rahulsharma11958@gmail.com'}><BiLogoGmail className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-10 h-10 p-1" /></Link>
          </div>
          <div>
            <button className="text-black py-2 px-4 rounded-full font-bold bg-[#02edff] hover:bg-cyan-400 shadow-[rgb(0,_238,_254)_0px_0px_25px]">
              <Link to='/about'>More About Me</Link>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={homeMain}
            alt="study man"
            className="w-[500px] max-sm:w-[350px]"
          />
        </div>
      </div>
      <div className="w-full text-white">
        <div className="flex justify-between max-md:flex-col">
          <div className=" font-semibold w-[60%] max-md:w-full">
            <h2 className="text-3xl my-14 ml-56 max-md:text-center max-md:mx-5 max-md:ml-3 max-sm:text-2xl">LET ME INTRODUCE MYSELF</h2>
            <p className="text-xl mb-4 ml-14 max-md:mx-7 max-sm:text-lg">
              I am a Frontend Developer And My Skills are{" "}
              <span className="text-purple-400">HTML , CSS , Javascript.</span>
            </p>
            <p className="text-xl mb-4 ml-14 max-md:mx-7 max-sm:text-lg">
              I have also the knowledge of libraries like{" "}
              <span className="text-purple-400">
                Tailwind CSS, Bootstrap and React JS.
              </span>
            </p>
            <p className="text-xl mb-4 ml-14 max-md:mx-7 max-sm:text-lg">
              I fall in love with programming and I have at least something, I
              think...
            </p>
            <p className="text-xl mb-4 ml-14 max-md:mx-7 max-sm:text-lg">
              I am fluent in languages like{" "}
              <span className="text-purple-400">Java and Javascript.</span>
            </p>
            <p className="text-xl mb-4 ml-14 max-md:mx-7 max-sm:text-lg">
              Whenever possible, I also apply my passion for developing products
              with Backend framework like{" "}
              <span className="text-purple-400">Node.js and Express</span>
            </p>
          </div>
          <div className="mt-24 mr-40 max-md:text-center max-md:mr-0 max-md:flex max-md:justify-center">
            <img src={Avatar} alt=""></img>
          </div>
        </div>
        <div className="flex flex-col text-center items-center mt-7 pb-10">
          <div className="font-semibold">
            <p className="text-4xl mb-5">FIND ME ON</p>
            <p className="text-xl mb-8">Feel free to <span className="text-purple-400">connect</span> with me</p>
          </div>
          <div className="flex w-72 justify-between">
          <Link target="_blank"  to='https://www.linkedin.com/in/rahul-sharma-a85b44251/'><BiLogoLinkedin className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-12 h-12 p-1" /></Link>
            <Link target='_blank' to="https://wa.me/9520825495"><FaWhatsapp className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-12 h-12 p-1" /></Link>
            <Link target='_blank' to={'https://www.instagram.com/rahul_sharma.pandit/'}><AiOutlineInstagram className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-12 h-12 p-1" /></Link>
            <Link target='_blank' to={'mailto: rahulsharma11958@gmail.com'}><BiLogoGmail className="border-[3px] text-cyan-400 border-cyan-400 rounded-full w-12 h-12 p-1" /></Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
