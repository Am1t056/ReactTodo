import React, { useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <>
    <div className='container-fluid py-3 '>
        <div className="container">
            <div className="row flex items-center">
                <div className="col-lg-2">
                    <a href="#" className='text-[18px] text-[#52dd59] font-bold'><h1>Amit<span className='px-1 text-[18px] text-[#34dada]'>Hero</span></h1></a>
                </div>
                <div className="col-lg-8">

                    <ul className='flex justify-center items-center'>
                        <li><a className='text-[14px] text-[#444] font-bold px-2' href="">Home</a></li>
                        <li><a className='text-[14px] text-[#444] font-bold px-2' href="">Home</a></li>
                        <li><a className='text-[14px] text-[#444] font-bold px-2' href="">Home</a></li>
                        <li><a className='text-[14px] text-[#444] font-bold px-2' href="">Home</a></li>
                        <li><a className='text-[14px] text-[#444] font-bold px-2' href="">Home</a></li>

                    </ul>

                </div>
                <div className="col-lg-2 flex justify-center items-center">
                    <a className='text-[16px] text-[#444] font-medium px-2 bg-[#52dd59] py-2 rounded-md ' href="">Sign In</a>

                    <div onClick={handleNav} className='mx-2'>
                       
                       {!nav?<RiMenu2Line size={20}/>:<AiOutlineClose size={20}/>}

                    </div>
                    

                </div>
            </div>
        </div>

    </div>

    <div className={!nav?'fixed top-[-1005]':'fixed top-0 left-0 h-full w-[65%] backdrop-blur-lg bg-[#ffff]'}>
        <ul>
            <li><a href="">AMit</a></li>
        </ul>

    </div>
    </>
  )
}

export default Header