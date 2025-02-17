/* eslint-disable no-unused-vars */
import React from "react";
import BackgroundImage from '../assets/images/background.png'

const Background = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <img
                className="fixed top-0 left-0 w-full h-full object-cover"
                src={BackgroundImage}
                autoPlay
                alt="BACKGROUND IMAGE"
            />

            {/* Overlay to improve text visibility */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* Content on top of video */}
            {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg">Enjoy the immersive video background.</p>
      </div> */}
        </div>
    );
};

export default Background;
