import React from "react";
import HeroImage from "../assets/heroimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      name="home"
      className="h-screen w-full bg-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-teal-400">
            Hi There!
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I am Shivansh Sharma
            </h2>
          </h2>
          <p className="text-gray-500 py-4">
            With a passion for creating digital art, I am a skilled graphic
            designer ready to make a mark in the industry. My specialties
            include logo design, web design, and illustration. Combining my
            technical expertise, creative mindset and attention to detail, I am
            ready to tackle any design challenge. From crafting beautiful
            websites to creating unique logos, I am determined to make your
            ideas come to life. Let's work together to make something amazing!
          </p>

          <div>
            <button className="group text-white w-fut px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="
            rounded-full 
            mx-20 
            w-1/2 
            md:w-full bg-gradient-to-b from-teal-500"
          />
        </div>
      </div>
    </m.div>
  );
};

export default Home;
