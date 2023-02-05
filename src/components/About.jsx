import React from "react";
import aboutpic from "../assets/aboutpic.png";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div name="about" className="h-screen w-full bg-gray-900 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
          <p className="text-4xl font-bold ">About</p>
          <div className="pb-2 inline border-b-4 border-teal-400 w-28" />
          <div className="mt-8 flex flex-row">
            <img className="w-1/3 " src={aboutpic} alt="aboutme" />
            <p className="text-xl">
              With a keen eye for detail and a passion for design, I am a driven
              and creative graphic designer and web developer ready to unleash
              my imagination and bring ideas to life. I bring a fresh
              perspective to the table, combining technical skills with an
              insatiable curiosity to create visually stunning and user-friendly
              designs. My goal is to constantly learn and grow, using my design
              expertise to make a lasting impact in the digital world. I am
              eager to take on new challenges and immerse myself in a dynamic,
              fast-paced environment where I can continue to push the boundaries
              of my abilities.
            </p>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default About;
