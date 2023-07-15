import React from "react";
import aboutImage from '../assets/aboutImage.png'
const About = () => {
    return (
      <div className="flex flex-1 items-center justify-center p-0 m-0 w-full h-screen bg-gray-900">
          <div className="w-1/2 flex flex-col justify-center px-3">
            <h1 className="text-4xl font-bold mb-6 text-white">About Us</h1>
            <p className="mb-4 text-white leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed finibus elit, et dignissim tellus.
              Mauris auctor scelerisque neque, vel maximus tellus malesuada eu. Integer tempor sagittis ligula, eget
              fringilla massa efficitur ut.
            </p>
        </div>
        <div className="flex w-25 mr-8">
            <img src={aboutImage} alt="About Us" className="w-4/5 h-auto" />
        </div>
      </div>
    );
};

export default About;
