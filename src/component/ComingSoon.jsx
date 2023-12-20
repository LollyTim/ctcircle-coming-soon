import logo from '../images/CTC.png'
import imgbg from '../images/computer-2583383_1280.jpg'
import React from 'react'
import iglogo from '../images/ig.svg'
import Linkedin from '../images/linkedin.svg'
import Twitter from '../images/twitter.svg'



const ComingSoon = () => {
  return (
    <div className=' dark:bg-[#0e1024]  bg-white w-[100%] h-[100vh] gap-10  items-center justify-center mx-auto flex relative'>
       <div className=' items-center justify-center w-full mx-auto flex flex-col leading-[40px]'>
        <div className=' gradient absolute  '></div>
        <div className=' gradient1 absolute w-10 h-10 right-0 top-0 '></div>
        <div className=' gradient1 absolute w-10 h-10 left-0 bottom-0 '></div>
        <img src={logo} alt="" className='absolute opacity-40 '/>
        <h1 className='absolute opacity-30 text-8xl top-12 '>Crown Tech Citcle</h1>
        <img src={imgbg} alt="" className='absolute opacity-10 -z-10 w-full'/>
        <img src={logo} alt="" className='absolute opacity-40 left-[-10px] top-[-15px] animate-spin-slow '/>
        <img src={logo} alt="" className='absolute opacity-40  right-[-45px] bottom-[-35px]'/>
        <div className=' gradient absolute right-[-45px] bottom-[-35px]  '></div>
        <div className=' gradient absolute  left-[-45px] top-[-35px] animate-spin-slow hover:animate-none z-10'></div>
           <h1 className=' text-6xl font-semibold dark:text-yellow-400 text-blue-900 space-y-8 z-50'>Coming soon</h1>
            <p className=' dark:text-white to-blue-900 '>Empower, Trive, Innovate</p>
           <form className=' z-50 flex flex-row gap-4 items-center '>
           <input className=' w-80 justify-center p-5 h-10 rounded-xl placeholder:flex placeholder:justify-center placeholder:text-slate-400 placeholder:text-md placeholder:pl-3 outline-none' type="email" placeholder='Join Waiting List' required />
            <button type="submit" className=' text-yellow-200 bg-indigo-800 py-[1px] px-3  rounded-xl '>Join</button>
           </form>
           <div className=' flex flex-row gap-4 justify-center  items-center mx-auto w-72 h-72'>
              <a href="https://www.instagram.com/ctcircle/" className='w-6 h-6 z-50'>  <img src={iglogo} className='' alt="iglogo" /></a>
              <a href="https://twitter.com/ctechcircle" className='w-6 h-6 z-50'>  <img src={Twitter} className='' alt="xlogo" /></a>
              <a href="https://www.linkedin.com/company/crowntechcircle/" className='w-6 h-6 z-50'>  <img src={Linkedin} className='' alt="linkedinlogo" /></a>
                
           </div>
       </div>
    </div>
  )
}

export default ComingSoon