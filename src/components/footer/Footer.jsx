import React from "react";
import {
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
  md:grid-cols-3 gap-8"
        >
          {/* company details */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, cupiditate quaerat aperiam quod nobis tempore.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +91 987654321
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation />
                coimbatore , Tamilnadu , India
              </p>
            </div>
          </motion.div>
          {/* footer link */}
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
          }}
          className="space-y-6">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li> Contact Us</li>
                  <li>About</li>
                  <li>Private Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* social link */}
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
          }}
          className="space-y-6 ">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div className="space-y-2">
              <p>Payment Methods</p>
              <img src={cards} alt="" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copyright link */}
        <p className="text-white text-center mt-8 border-t-2 pt-8">
          All RightS Reserved || barath2112000@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
