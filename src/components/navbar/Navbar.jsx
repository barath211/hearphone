import React from 'react'
import { IoMenu } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { MouseFollower, UpdateFollower } from 'react-mouse-follower';
import {motion} from 'framer-motion'




const NavbarMenu =[
    {
        id:1,
        title:"Home",
        link:'#'
    },
    {
        id:2,
        title:"Categories",
        link:'#'
    },
    {
        id:3,
        title:"Blog",
        link:'#'
    },
    {
        id:4,
        title:"About",
        link:'#'
    },
    {
        id:5,
        title:"Contact",
        link:'#'
    },

]
const Navbar = () => {
  return (
    <>
    <div className='bg-brandDark text-white py-4 font-varela'>
    <motion.nav
   initial = {{ opacity:0 }}
   animate={{opacity:1}}
   transition={{duration:1, delay:0.5 }}
    className='container flex justify-between items-center'>
      {/* //  logo section */}
      <div>
        <a href="#" className='font-bold text-end-xl uppercase'>
        Aesthetic / <span className='font-extralight text-white-70'>Earphones</span>
        </a>
      </div>
      {/* //  menu section */}
      <div className='hidden md:block'>
        <ul className='flex items-center gap-4'l>
            {
            NavbarMenu.map((item)=>(
                <li key={item.id}>
                  <UpdateFollower mouseOptions={{
                    backgroundColor:"white",
                    zIndex:999,
                    followSpeed:1,
                    scale:5,
                    mixBlendMode:'difference'
                  }}>
                  <a href={item.link} className='inline-block text-sm py-2
                   px-3 uppercase'>{item.title}</a> 
                  </UpdateFollower>

                </li>
            ))
            }
            <UpdateFollower mouseOptions={{
                    backgroundColor:"white",
                    zIndex:999,
                    followSpeed:1,
                    scale:5,
                    mixBlendMode:'difference'
                  }}>
                  <button className='text-xl ps-14 '>
            <FaHeadphones />
            </button>
                  </UpdateFollower>
        </ul>
      </div>
      {/* //  mobile hamburger section */}
      <div className='md:hidden'>
      <IoMenu  className='text-4xl'/>
      </div>
    </motion.nav>
    </div>
    </>
  )
}

export default Navbar
