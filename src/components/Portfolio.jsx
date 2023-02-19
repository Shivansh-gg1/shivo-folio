import React from "react";
import web1 from "../assets/web1.jpeg";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import web7 from "../assets/web7.png";
import web8 from "../assets/web8.png";
import web9 from "../assets/web9.png";
const Portfolio = () => {
  return (
    <div>
      <div className="pb-8">
        <p className="text-4xl font-bold"> Portfolio </p>
        <p>Check out some of my work here!</p>
      </div>
      <div>
        <img
          className=" w-1/4 rounded-md duration-200 hover:scale-105"
          src={web1}
          alt="1stimg"
        />
      </div>
      <div>
        <img src={web2} alt="2ndimg" />
      </div>
      <div>
        <img src={web3} alt="3rdimg" />
      </div>
      <div>
        <img src={web4} alt="4thimg" />
      </div>
      <div>
        <img src={web5} alt="5thimg" />
      </div>
      <div>
        <img src={web6} alt="6thimg" />
      </div>
      <div>
        <img src={web7} alt="6thimg" />
      </div>
      <div>
        <img src={web8} alt="6thimg" />
      </div>
      <div>
        <img src={web9} alt="6thimg" />
      </div>
    </div>
  );
};

export default Portfolio;
