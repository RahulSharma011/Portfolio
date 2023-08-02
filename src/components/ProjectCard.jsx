import React from 'react'
import { Link } from 'react-router-dom';
import videohub from '../Assets/Projects/Videohub.png'
import guessthenumber from '../Assets/Projects/Guesstheno.png'
import realtimeclock from '../Assets/Projects/realtimeclock.png'
import studenthub from '../Assets/Projects/studenthub.png'
import techstart from '../Assets/Projects/techStart.png'
import summariser from '../Assets/Projects/summariser.png'


const ProjectCard = () => {
    return (
        <div className='grid grid-flow-col grid-rows-2 max-lg:grid-rows-3 max-md:grid-rows-3 max-sm:grid-rows-6 pb-20'>

            <div className='hover:scale-105 duration-75 hover:scale-105 duration-75 border mx-10 my-6 rounded-lg px-8 py-8' style={{ boxShadow: "0px 0px 30px 2px #A076F9" }}>
                <div>
                    <div className='flex justify-center'>
                        <img className='w-full' src={videohub} alt="" />
                    </div>
                    <p className='text-center text-xl font-semibold my-3 mt-5'>Video Hub</p>
                </div>
                <div className='flex justify-center gap-5 mt-7'>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://github.com/RahulSharma011/videoshubs.git">Github</Link></button>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://64c904fb83321809a3fe4da3--videoshub.netlify.app/">Demo</Link></button>
                </div>
            </div>
            
            <div className='hover:scale-105 duration-75 border mx-10 my-6 rounded-lg px-8 py-8' style={{ boxShadow: "0px 0px 30px 2px #A076F9" }}>
                <div>
                    <div className='flex justify-center'>
                        <img className='w-full' src={studenthub} alt="" />
                    </div>
                    <p className='text-center text-xl font-semibold my-3 mt-5'>Student hub</p>
                </div>
                <div className='flex justify-center gap-5 mt-7'>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://github.com/RahulSharma011/studenthub">Github</Link></button>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://studentstudyzone.netlify.app">Demo</Link></button>
                </div>
            </div>
            
            <div className='hover:scale-105 duration-75 border mx-10 my-6 rounded-lg px-8 py-8' style={{ boxShadow: "0px 0px 30px 2px #A076F9" }}>
                <div>
                    <div className='flex justify-center'>
                        <img className='w-full' src={techstart} alt="" />
                    </div>
                    <p className='text-center text-xl font-semibold my-3 mt-5'>Techstart</p>
                </div>
                <div className='flex justify-center gap-5 mt-7'>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://github.com/RahulSharma011/TechyStarSolve">Github</Link></button>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://645e11b6246e5c7dd1e8fdd6--techystarsolve.netlify.app/">Demo</Link></button>
                </div>
            </div>
            
            <div className='hover:scale-105 duration-75 border mx-10 my-6 rounded-lg px-8 py-8' style={{ boxShadow: "0px 0px 30px 2px #A076F9" }}>
                <div>
                    <div className='flex justify-center'>
                        <img className='w-full' src={guessthenumber} alt="" />
                    </div>
                    <p className='text-center text-xl font-semibold my-3 mt-5'>Guess The Number</p>
                </div>
                <div className='flex justify-center gap-5 mt-7'>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://github.com/RahulSharma011/Guess-the-number-game.git">Github</Link></button>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://guesssthenumbers.netlify.app">Demo</Link></button>
                </div>
            </div>
            
            
            <div className='hover:scale-105 duration-75 border mx-10 my-6 rounded-lg px-8 py-8' style={{ boxShadow: "0px 0px 30px 2px #A076F9" }}>
                <div>
                    <div className='flex justify-center'>
                        <img className='w-full' src={summariser} alt="" />
                    </div>
                    <p className='text-center text-xl font-semibold my-3 mt-5'>URL Summariser</p>
                </div>
                <div className='flex justify-center gap-5 mt-7'>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://github.com/RahulSharma011/Summarize-article.git">Github</Link></button>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://urlsummarizer.netlify.app">Demo</Link></button>
                </div>
            </div>

            <div className='hover:scale-105 duration-75 border mx-10 my-6 rounded-lg px-8 py-8' style={{ boxShadow: "0px 0px 30px 2px #A076F9" }}>
                <div>
                    <div className='flex justify-center'>
                        <img className='w-full' src={realtimeclock} alt="" />
                    </div>
                    <p className='text-center text-xl font-semibold my-3 mt-5'>Real Time Clock</p>
                </div>
                <div className='flex justify-center gap-5 mt-7'>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://github.com/RahulSharma011/Analog-Rolex_Watch.git">Github</Link></button>
                    <button className='hover:bg-purple-800 bg-purple-600 text-white font-bold py-2 px-4 rounded'><Link target='_blank' to="https://rahulsharma011.github.io/Analog-Rolex_Watch/">Demo</Link></button>
                </div>
            </div>
            
            
        </div>
    )
}

export default ProjectCard