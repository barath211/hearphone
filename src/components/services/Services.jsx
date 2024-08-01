import React from 'react'
import Icon1 from '../../assets/icons/obj1.png'
import Icon2 from '../../assets/icons/obj2.png'
import Icon3 from '../../assets/icons/obj3.png'
import { delay } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
import {motion} from 'framer-motion'


export const fadeUp = (delay) =>{
return{
    hidden:{
        opacity:0,
        y:100,
   },
    show:{
        opacity:1,
        y:0,
      transition : {
            duration:0.5,
            delay:delay,
     }
    }
  }
}

const serviceData = [
    {
        id:1,
        title:"Security",
        icon:Icon1,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, sapiente eligendi pariatur eveniet labore ducimus.',
        delay:0.5
    },{
        id:2,
        title:"Gurantee",
        icon:Icon2,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, sapiente eligendi pariatur eveniet labore ducimus.',
        delay:0.8,
        
    },{
        id:3,
        title:"Affordability",
        icon:Icon3,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, sapiente eligendi pariatur eveniet labore ducimus.',
        delay:0.8,
        
        
    }
]

const Services = () => {
  return (
    <>
      <section className='bg-gray-100 font-poppins py-8'>
   <div className='container py-14'>
<motion.h1
variants = {fadeUp(0.2)}
initial = 'hidden'
whileInView= 'show'
className='text-3xl font-bold text-center pb-10'>
services
</motion.h1>
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
    {serviceData.map((data)=>(
 <UpdateFollower
 mouseOptions={{
    backgroundColor:'white',
    zIndex:9999,
    followSpeed:0.5,
    scale:5,
    rotate:720,
    mixBlendMode:'darken',
    backgroundElement:(
        <motion.div>
        <img src={data.icon} />    
        </motion.div>
    )
 }}
 >
    <motion.div 
    variants={fadeUp(data.delay)}
    initial='hidden'
    whileInView='show'
className='flex flex-col items-center justify-center p-5
   max-w-[300px] mx-auto shadow-lg rounded-lg bg-white'>
        <img src={data.icon} alt="" className='w-[100px] mb-4'/>
    <div className='text-center space-y-2'>
        <h1 className='text-2xl  font-bold '>{data.title}</h1>
    <p className='text-center text-sm text-black/75'>{data.desc}</p>
    </div>
    </motion.div>
 </UpdateFollower>
    ))}
   </div>
   </div>
      </section>
    </>
  )
}

export default Services
