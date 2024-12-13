"use client"
import React, { useState, useEffect } from "react";
import HeroImg from "../../public/IMG_0848.JPEG.jpg";
import Image from "next/image";

const Hero = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    // Set a timeout for when the typing animation is expected to finish
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 3000); // Match the typing duration (3s)

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div className="">
      <div className="w-full text-white h-[250px] lg:h-[480px] relative overflow-clip bg-black bg-opacity-50">
        <div className="w-full h-full flex flex-col justify-center">
          <h1
            className="mx-auto text-center text-[#F0D7c7] text-5xl lg:text-7xl font-black font-sk"
            style={{
              textShadow: "0.5px 0.5px black",
            }}
          >
            <span
              className={`text-5xl lg:text-5xl block mb-2`}>
              Welcome to
            </span>
            <span
              className={`typing-effect ${isTypingDone ? "done" : ""}`}
            >
              RedHorn
            </span>
          </h1>
        </div>
        <Image src={HeroImg} alt="Hero" fill className="-z-10 absolute" priority />
      </div>
    </div>
  );
};

export default Hero;
