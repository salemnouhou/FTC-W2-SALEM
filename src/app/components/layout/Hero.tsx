"use client";
import React from "react";
import Navbar from "../ui/Navbar";
import Image from "next/image";
import Button from "../ui/Button";
import Dashboard from '@/assets/images/dashboard.png';
import DashboardHero from '@/assets/images/DashbardHero.svg';

const Hero: React.FC = () => {
  return (
    <section className="relative  w-full bg-secondary-500 overflow-hidden flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center  mt-24 justify-center  text-white md:text-center space-y-[12px]">
        <div className=" w-full px-4">
        <h1 className="md:hidden text-bold-36 ">
          All your <br />
          business expenses <br />
          in one place.
        </h1>
        </div>

        <h1 className="hidden md:block text-bold-72">
          All your business <br /> expenses in one place.
        </h1>

         <div className=" w-full px-4">
         <span className="md:hidden text-regular-14 text-secondary-300 ">
            Your one-stop finance empower platform. <br />
            Manage all your business expenses with our <br /> supafast app.
          </span>

         </div>
        <div className="hidden md:block text-regular-24 text-secondary-300">
          <span>
            Your one-stop finance empower platform. <br />
            Manage all your business expenses with our supafast app.
          </span>
        </div>

        {/* CTA */}
        <div className="w-full pt-8 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Button size="large" className="w-full z-10 md:max-w-[187px]" variant="primary" label="Get a Free Demo" />
            <Button variant="minimal" className="w-full lg:bg-secondary-400/10 z-10 md:max-w-[187px] text-secondary-200 " size="large" label="See Pricing" />
          </div>
        </div>

        <div className="w-full   max-w-[1200px] 2xl:max-w-[1440px]    mt-20 px-4  md:pt-10 rounded-[3.73px]">
          <Image
            src={DashboardHero}
            alt="Dashboard Image"
            className="w-full h-auto  max-h-[852.86px] object-cover  rounded-[3.73px] "
          priority
          />
        </div>
      </div>

      {/* Décors cercles */}
      <div className="xl:hidden absolute -top-[10px] -right-[640px] w-[914px] h-[914px] opacity-20">
        <svg width="328" height="228" viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="227.5" cy="0.5" r="202.5" className="stroke-white" strokeWidth="50" />
        </svg>
      </div>

      <div className="xl:hidden absolute -bottom-[700px] -left-[40px] w-[914px] h-[914px] opacity-20">
        <svg width="328" height="228" viewBox="0 0 228 227" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="0.5" cy="227.5" r="202.5" className="stroke-white" strokeWidth="50" />
        </svg>
      </div>

      <div className="hidden xl:block absolute -top-[60px] -right-[600px] w-[914px] h-[914px] opacity-20">
        <svg width="457" height="457" viewBox="0 0 457 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="457" r="407" stroke="white" strokeWidth="100" />
        </svg>
      </div>

      <div className="hidden xl:block absolute -bottom-[600px] -left-[90px] w-[914px] h-[914px] opacity-20">
        <svg width="457" height="457" viewBox="0 0 457 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cy="457" r="407" stroke="white" strokeWidth="100" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

