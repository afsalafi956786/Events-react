import React from 'react'
import {Link} from 'react-router-dom'



function Navbar() {
  return (
    <div>
    <header className="mt-3 flex justify-between border-b p-4 ">
      {/* logo */}
      <a href="" className="flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90 text-red-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
     </svg>
     <span className="font-bold text-xl text-red-600">Events</span>
      </a>
      {/* logo */}
  
  
  
        {/* search */}
      <div className="flex border gap-4 border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        {/* line */}
        <div className=" border-l border-gray-300"></div>
        {/* end lin */}
        <div>Any week</div>
        <div className=" border-l border-gray-300"></div>
        <div>Any guests</div>
        <button className="bg-red-600 text-white rounded-full p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </button>
      </div>
      {/* search */}
  
       
       {/* account */}
       <Link to={'/noticeboard'} className="flex border gap-4 border-gray-300 rounded-full py-1 px-4 items-center shadow-md shadow-gray-300">
       <h3 className='text-red-600'>Notice boared</h3>
       </Link>
       {/* account */}
  
  
  
    </header>
   </div> 

  
  )
}

export default Navbar