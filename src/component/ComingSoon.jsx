import React from 'react'

const ComingSoon = () => {
  return (
    <div className=' dark:bg-black bg-white w-[100%] h-[100vh]  items-center justify-center mx-auto flex'>
       <div className=' items-center justify-center w-full mx-auto flex flex-col leading-[40px] relative '>
        <div className=' gradient '></div>
           <h1 className=' text-6xl font-semibold dark:text-yellow-400 text-blue-900 space-y-8'>Coming soon</h1>
            <p className=' dark:text-white to-blue-900 '>Crown Tech Circle</p>
           <div className=' flex flex-row gap-4 items-center '>
           <input className=' w-80 justify-center p-5 h-10 rounded-xl placeholder:flex placeholder:justify-center placeholder:text-slate-400 placeholder:text-md placeholder:pl-3 outline-none' type="email" placeholder='Join Waiting List' required />
           <button type="submit" className=' text-yellow-200 bg-indigo-800 py-[1px] px-3  rounded-xl '></button>
           </div>
       </div>
    </div>
  )
}

export default ComingSoon