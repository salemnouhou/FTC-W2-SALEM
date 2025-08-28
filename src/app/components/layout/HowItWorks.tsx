import React from 'react'
import Card from '../ui/Card'
import workOne from '@/assets/images/HowItWorks/workOne.svg'
import workTwo from '@/assets/images/HowItWorks/workTwo.svg'
import workTree from '@/assets/images/HowItWorks/workTree.svg'
import Button from '../ui/Button'
import WorkTwoLeft from '@/assets/images/HowItWorks/WorkTwoLeft.svg'
import WorkTwoRight from '@/assets/images/HowItWorks/WorkTwoRight.svg'
import WorkTwoDown from '@/assets/images/HowItWorks/WorkTwoDown.svg'

import Content from "../../../assets/images/Benefits/Content.svg"
import Image from 'next/image'
const HowItWorks = () => {
    return (
        <div className='bg-secondary-700'>
            {/* HOW IT WORKS ONE */}

            <div className='bg-secondary-700 px-4 py-20'>
                <div className='flex flex-col md:flex-row md:gap-[163px]  md:items-center space-y-[px]'>
                    <div className='md:hidden flex flex-col space-y-[6px]'>
                        <span className='text-medium-12 text-primary-500'>HOW IT WORKS</span>
                        <span className='text-bold-24 text-white'>Few Easy Steps <br />
                            and Done
                        </span>
                    </div>



                    <div className=' md:hidden text-secondary-400 text-regular-14'>
                        In just few easy step, you are all set to manage <br /> your business
                        finances. Manage all expenses with <br /> Spend.In all in one place.
                    </div>

                    <div className=' w-full flex flex-col justify-center items-center gap-6'>
                        <div className='hidden md:flex flex-col  text-center gap-6'>
                            <span className='text-medium-20 text-primary-500'>HOW IT WORKS</span>
                            <span className='text-bold-40 text-white'>Few Easy Steps and Done</span>
                        </div>


                        <div className='hidden md:block text-center  max-w-2xl   font-light text-lg text-secondary-300'>
                            In just few easy step, you are all set to manage your business finances. <br />
                            Manage all expenses with Spend.In all in one place.
                        </div>
                    </div>


                </div>

                <div className='mt-4 md:mt-8   max-w-[1200px] 2xl:max-w-[1440px] mx-auto p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    <div className='w-full max-w-[470px] mx-auto rounded-[10.16px]'>
                        <Card
                            variant='howitworks'
                            title='Register your <br /> Spend.In account.'
                            titleDesktop='Register your <br /> Spend.In account.'
                            image={workOne}
                        />
                    </div>

                    <div className='w-full max-w-[470px] mx-auto rounded-[10.16px]'>
                        <Card
                            variant='howitworks'
                            title='Fill in the list of your <br /> business expenses.'
                            titleDesktop='Fill in the list of your <br /> business expenses.'
                            image={workTwo}
                        />
                    </div>

                    <div className='w-full max-w-[470px] mx-auto md:col-span-2 lg:col-span-1 rounded-[10.16px]'>
                        <Card
                            variant='howitworks'
                            title="Done, let's continue the work."
                            titleDesktop="Done, let's <br/> continue the work."
                            image={workTree}
                        />
                    </div>

                </div>

            </div>

            <div className=" w-full  lg:pb-8  px-4 ">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <Button size="large" className="w-full z-10 md:max-w-[187px]" variant="primary" label="Get a Free Demo" />
                    <Button variant="minimal" className="w-full lg:bg-secondary-400/10 z-10 md:max-w-[187px] text-secondary-200 " size="large" label="See Pricing" />
                </div>
            </div>

            {/* HOW IT WORKS TWO */}
            <div className=' py-4 max-w-[1200px] lg:mt-16  2xl:max-w-[1440px] mx-auto px-4'>
                <div className='flex flex-col md:flex-row md:gap-[163px]  md:items-center space-y-[6px]'>
                    <div className='md:hidden flex flex-col space-y-[6px]'>
                        <span className='text-medium-12 text-primary-500'>HOW IT WORKS</span>
                        <span className='text-bold-24 text-white'>Few Easy Steps <br />
                            and Done
                        </span>
                    </div>



                    <div className=' md:hidden text-secondary-400 text-regular-14'>
                        In just few easy step, you are all set to manage <br /> your business
                        finances. Manage all expenses with <br /> Spend.In all in one place.
                    </div>




                </div>


                {/* BENEFITS CARDS 2 SECTION */}


                <div className='grid md:grid-cols-2  md:hidden   justify-center items-center gap-10 md:gap-1 mt-8 md:mt-10 '>
                    <Image
                        src={WorkTwoLeft}
                        alt="title"
                        width={319}
                        height={211}
                        className=" w-full"
                    />
                    <Image
                        src={WorkTwoRight}
                        alt="title"
                        width={319}
                        height={291}
                        className="w-full md:h-[311px] "
                    />
                </div>


                <div className='md:grid md:grid-cols-2   hidden justify-center items-center md:gap-20 mt-8 md:mt-0 max-w-5xl mx-auto '>

                   <div className='py-2 h-full rounded-[12px]'>
                   <Image
                        src={WorkTwoRight}
                        alt="title"
                        width={588}
                        height={536}
                        className="w-full h-full object-cover rounded-[12px] "
                    />

                   </div>
                    <div className=' h-full space-y-4 '>


                        <div className='p-2 w-full flex flex-col justify-center items-start gap-4 '>
                            <div className='hidden md:flex flex-col  text-start '>
                                <span className='text-medium-20 text-primary-500'>HOW IT WORKS</span>
                                <span className='text-bold-40 text-white'>Few Easy Steps and Done</span>
                            </div>


                            <div className='hidden md:block text-start  max-w-2xl    font-light text-regular-14 text-secondary-300'>
                                In just few easy step, you are all set to manage your business finances. <br />
                                Manage all expenses with Spend.In all in one place.
                            </div>
                           <div className=''>
                           <Image
                            src={WorkTwoDown}
                            alt="title"
                            width={319}
                            height={201}
                            className="w-full  object-cover "
                        />
                           </div>
                        </div>
                      

                    </div>

                </div>

            </div>

            
        </div>
    )
}

export default HowItWorks