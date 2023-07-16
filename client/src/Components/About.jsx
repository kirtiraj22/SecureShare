import React from "react";
import aboutImage from '../assets/aboutImage.png'
const About = () => {
  return (
    <div className="flex flex-1 items-center justify-center p-0 m-0 w-full h-screen bg-gray-900" id="about">
      <div className="w-1/2 flex flex-col justify-center px-3">
        <h1 className="text-4xl mb-6 font-extrabold text-white text-center">About Us</h1>
        <p className="mb-4 leading-loose text-white">
          At SecureShare, we believe in the power of secure and decentralized file sharing. Our mission is to provide a platform that prioritizes data privacy and empowers users to share their files with confidence. With our innovative technology, we ensure that your files are encrypted and stored in a decentralized manner, giving you full control and ownership over your data.

          We understand the importance of seamless collaboration and effortless sharing, which is why our platform is designed to be user-friendly and intuitive. Whether you're a professional looking to share sensitive documents or a creative individual sharing your work with the world, SecureShare is here to simplify and enhance your file sharing experience.
        </p>
      </div>
      {/* <div className="flex w-25 mr-8"> */}
      <div className="w-full md:w-1/2 px-3">
        <img src={aboutImage} alt="About Us" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default About;
