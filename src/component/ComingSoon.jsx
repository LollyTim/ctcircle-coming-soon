   import logo from '../images/CTC.png'
import bgimg from '../images/computer-2583383_1280.jpg'
import React from 'react'
import iglogo from '../images/ig.svg'
import Linkedin from '../images/linkedin.svg'
import Twitter from '../images/twitter.svg'



const ComingSoon = () => {
  return (
    <div className=' overflow-hidden dark:bg-[#0e1024]  bg-white w-[100%] h-[100vh] gap-10  items-center justify-center flex relative'>
       <div className=' items-center justify-center w-full mx-auto flex flex-col leading-[40px]'>
        <div className=' gradient absolute animate-spin-slow lg:animate-none md:animate-none  '></div>
        <div className=' gradient1 absolute w-10 h-10 right-0 top-0 '></div>
        <div className=' gradient1 absolute w-10 h-10 left-0 bottom-0 '></div>
        <img src={logo} alt="" className='absolute opacity-40 '/>
        <h1 className='absolute  dark:text-green-400 text-blue-900 text-4xl lg:text-6xl top-32 '>Crown Tech Citcle</h1>
        <img src={bgimg} alt="" className='absolute opacity-40 z-0 w-full h-full'/>
        <img src={logo} alt="" className='absolute opacity-40 md:flex hidden lg:flex left-[-10px] top-[-15px] animate-spin-slow '/>
        <img src={logo} alt="" className='absolute opacity-40 hidden lg:flex   right-[-45px] bottom-[-35px]'/>
        <div className=' gradient absolute right-[-45px] bottom-[-35px] hidden lg:flex md:flex '></div>
        <div className=' gradient absolute  left-[-45px] top-[-35px] animate-spin-slow hidden lg:flex  hover:animate-none z-10'></div>
           <h1 className=' text-3xl md:text-6xl font-semibold dark:text-yellow-400 text-blue-900 space-y-8 z-50'>Coming soon</h1>
            <p className=' dark:text-white to-blue-900 '>Empower, Trive, Innovate</p>
           <form className=' z-50 flex flex-row gap-4 items-center w-56 lg:w-[]500px '>
           <input className=' w-56 lg:w-80 justify-center p-5 h-10 rounded-xl placeholder:flex placeholder:justify-center placeholder:text-slate-400 placeholder:text-md placeholder:pl-3 outline-none' type="email" placeholder='Join Waiting List' required />
            <button type="submit" className=' text-yellow-200 bg-indigo-800 py-[1px] px-3  rounded-xl '>Join</button>
           </form>
           <div className=' flex flex-row gap-4 justify-center  items-center w-72 mt-6'>
              <a href="https://www.instagram.com/ctcircle/" className='w-6 h-6 z-50'>  <img src={iglogo} className='' alt="iglogo" /></a>
              <a href="https://twitter.com/ctechcircle" className='w-6 h-6 z-50'>  <img src={Twitter} className='' alt="xlogo" /></a>
              <a href="https://www.linkedin.com/company/crowntechcircle/" className='w-6 h-6 z-50'>  <img src={Linkedin} className='' alt="linkedinlogo" /></a>
                
           </div>
       </div>
    </div>
  )
}

export default ComingSoon