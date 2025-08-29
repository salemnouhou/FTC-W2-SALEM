"use client";
import React from 'react'
import Button from '../ui/Button'
import CtaImage from "@/assets/images/Cta/CtaImage.svg"
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton'
const CtaSection = () => {
    return (


        <section className='bg-secondary-700 pt-20  lg:h-screen/2 '>
            <div className='  max-w-7xl xl:relative  grid sm:grid-cols-2 gap-10 lg:gap-8 mx-auto  '>
                <div className=' space-y-[18px] lg:space-y-[24px] xl:h-[450px] px-4'>

                    <span className='text-medium-12 text-primary-500  lg:text-medium-20'>DOWNLOAD NOW!</span>

                    <p className='lg:hidden text-bold-24 text-white'>
                        Start Track Your Business <br />
                        Expenses Today
                    </p>

                    <p className='hidden lg:block text-bold-40 text-white'>
                        Start Track Your Business <br />
                        Expenses Today
                    </p>


                    <p className=' lg:hidden text-regular-14 text-secondary-300'>
                        Are you ready to make your business more organized? <br /> Download Spend.In now!
                    </p>

                    <p className='hidden lg:block text-regular-20 text-secondary-400'>
                        Are you ready to make your business more organized? <br /> Download Spend.In now!
                    </p>

                    <Button
                        calNamespace="talk-to-an-expert"
                        calLink="optyven/talk-to-an-expert"
                        calConfig={{ layout: "month_view" }}
                        label='Get a Free Demo'
                        size='large'
                        className='w-full  md:w-auto text-medium-16'
                    />
                </div>
                <div className=' xl:relative w-full   pl-4'>
                    <ImageWithSkeleton
                        src={CtaImage}
                        alt='Cta Image'
                        className='w-full rounded-tl-[10px] xl:rounded-tl-[16px] xl:absolute xl:w-full xl:h-[450px] '
                    />
                </div>
            </div>
        </section>
    )
}

export default CtaSection