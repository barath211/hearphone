// line no 172 to 176 my modified  timin of video - 46.54

import React from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones wireless",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quo rerum porro temporibus tempore dolores esse similique corrupti quos quae dolorem deleniti, pariatur id fugiat soluta architecto, minus quaerat dolore. Quia voluptates aperiam error ab, hic libero unde nulla inventore dicta temporibus. ",
    price: "$100",
    modal: "Modal Brown",
    bgColor: " #8b5958 ",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones wireless",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quo rerum porro temporibus tempore dolores esse similique corrupti quos quae dolorem deleniti, pariatur id fugiat soluta architecto, minus quaerat dolore. Quia voluptates aperiam error ab, hic libero unde nulla inventore dicta temporibus. ",
    price: "$100",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones wireless",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quo rerum porro temporibus tempore dolores esse similique corrupti quos quae dolorem deleniti, pariatur id fugiat soluta architecto, minus quaerat dolore. Quia voluptates aperiam error ab, hic libero unde nulla inventore dicta temporibus. ",
    price: "$100",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px] ">
          {/* Headphone - info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              {/* headphone title */}
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence>
                <motion.p
                  key={activeData.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose *:text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence>
                <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 6,
                    backgroundElement: <div>
                  <img src={activeData.image} />
                    </div>
                }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{
                      backgroundColor: activeData.bgColor,
                    }}
                    className="px-4 py-2 inline-block
                   font-normalrounded-sm"
                  >
                    Buy and Listen
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* Headphone list separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-10">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm">Top Headphones for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              {/* headphone list switch  */}
              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                    mouseOptions={{
                      backgroundColor: item.bgColor,
                      zIndex:9999,
                      followSpeed:0.5,
                      rotate: -720,
                      scale: 9,
                      backgroundElement:(
                        <div>
                          <img src={item.image}/>
                        </div>
                      )
                    }}
                    >
                  <div
                      key={item.id}
                      onClick={() => handleActiveData(item)}
                      className="grid grid-cols-2 place-items-center cursor-pointer"
                    >
                      <div>
                        <img src={item.image} alt="" className="w-[200px]" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xs font-normal text-nowrap">
                          {item.modal}
                        </p>
                      </div>
                    </div>
                    </UpdateFollower>
                    
                  );
                })}
              </div>
            </div>
          </div>
          {/* hero image */}
          <div className="flex flex-col justify-end items-center">
           <AnimatePresence>
           <motion.img
            key={activeData.id}
           initial={{opacity:0, scale:0.9, y:100}}
           animate={{opacity:1, scale:1, y:0}}
            transition={{
              duration:0.4, 
              delay:0.2, 
              ease:easeInOut}}
            exit={{
              opacity:0,
              scale:0.9,
              y:100,  

              transition:{
                duration:0.2
              }
            }}
              src={activeData.image}
              alt=""
              className="w-[300px] md:[400px] xl:w-[550px]"
            />
           </AnimatePresence>
          </div>
          {/* whats app */}
          <div
            className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] 
   duration-500 z-[99999] mix-blend-difference"
          >
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
