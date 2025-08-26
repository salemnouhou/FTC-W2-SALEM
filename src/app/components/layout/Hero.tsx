"use client";
import React from "react";
import Navbar from "../ui/Navbar";
import ElipseTopRight from "@/assets/images/elipstopright.png"
import ElipseDownLeft from "@/assets/images/elipsedownleft.png"
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-secondary-500 overflow-hidden">
      <Navbar />

      <div className="flex items-center justify-center h-full">
        <div className="text-center px-4">
          <h1 className="text-bold-40 mb-4">
            Bienvenue sur notre site

          </h1>
          <p className="text-regular-16 mb-6">
            Découvrez nos produits et solutions innovantes
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Commencer
          </button>
        </div>
      </div>



      <div className="  xl:hidden absolute  -top-[10px] -right-[640px] w-[914px] h-[914px] opacity-20">

        <svg width="328" height="228" viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="227.5" cy="0.5" r="202.5" className="stroke-white" stroke-width="50" />
        </svg>
      </div>


      <div className=" xl:hidden absolute  -bottom-[700px] -left-[40px] w-[914px] h-[914px] opacity-20">
        <svg width="328" height="228" viewBox="0 0 228 227" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="0.5" cy="227.5" r="202.5" className="stroke-white" stroke-width="50" />
        </svg>

      </div>

      <div className=" hidden xl:block absolute  -top-[60px] -right-[600px] w-[914px] h-[914px] opacity-20">
        <svg width="457" height="457" viewBox="0 0 457 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="457" r="407" stroke="white" stroke-width="100" />
        </svg>


      </div>


      <div className="hidden xl:block absolute  -bottom-[600px] -left-[90px] w-[914px] h-[914px] opacity-20">
        <svg width="457" height="457" viewBox="0 0 457 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cy="457" r="407" stroke="white" stroke-width="100" />
        </svg>

      </div>
    </section>
  );
};