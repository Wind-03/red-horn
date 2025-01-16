"use client"
import React, { useState, useEffect } from "react";
import HeroImg from "../../public/IMG_0848.JPEG.jpg";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const Hero = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set a timeout for when the typing animation is expected to finish
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 3000); // Match the typing duration (3s)

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    enqueueSnackbar("Copied to clipboard!", { variant: "success" });
  };

  return (
    <div className="">
      <SnackbarProvider 
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      style={{color:"#fff", backgroundColor:"#893340"}}
      autoHideDuration={1000}/>
      <div className="w-full text-white h-[250px] lg:h-[480px] relative overflow-clip bg-black bg-opacity-50">
      <button
            className="absolute lg:fixed top-1 right-1 px-4 py-2 bg-[#893340] text-white rounded-lg z-20"
            onClick={() => setIsModalOpen(true)}
          >
            Payment details
          </button>
        <div className="w-full h-full flex flex-col justify-center">
          <h1
            className="mx-auto text-center text-[#F0D7c7] text-5xl lg:text-7xl font-black font-sk"
            style={{
              textShadow: "0.5px 0.5px black",
            }}
          >
            <span className={`text-5xl lg:text-5xl block mb-2`}>Welcome to</span>
            <span className={`typing-effect ${isTypingDone ? "done" : ""}`}>
              RedHorn
            </span>
          </h1>
        </div>
        <Image src={HeroImg} alt="Hero" fill className="-z-10 absolute" priority />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg ">
            <h2 className="text-xl font-bold mb-4">Copy Items</h2>
            <ul>
              <li className="mb-2 flex items-center gap-x-2">
                <p>Moniepoint MFN</p>
                <Icon  onClick={() => handleCopy(" Moniepoint MFN")} icon="line-md:clipboard" width="24" height="24"  style={{color: "#893340"}} />
              </li>
              <li className="mb-2 flex items-center gap-x-2">
                <p>6875990836</p>
                <Icon  onClick={() => handleCopy(" 6875990836")} icon="line-md:clipboard" width="24" height="24"  style={{color: "#893340"}} />
              </li>
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;