import React from "react";
import aboutpic from "../assets/aboutpic.png";

const About = () => {
  return (
    <div>
      <div name="about" className="h-screen w-full bg-gray-900 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-teal-400">
              About
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xl mt-20">
          With a keen eye for detail and a passion for design, I am a driven and
          creative graphic designer and web developer ready to unleash my
          imagination and bring ideas to life. I bring a fresh perspective to
          the table, combining technical skills with an insatiable curiosity to
          create visually stunning and user-friendly designs. My goal is to
          constantly learn and grow, using my design expertise to make a lasting
          impact in the digital world. I am eager to take on new challenges and
          immerse myself in a dynamic, fast-paced environment where I can
          continue to push the boundaries of my abilities.
        </p>
        <img className="w-1/3 flex flex-col" src={aboutpic} alt="aboutme" />
      </div>
    </div>
  );
};

export default About;
