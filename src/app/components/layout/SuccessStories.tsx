"use client"
import React, { useState } from 'react'
import LeftSuccessStories from '../ui/LeftSuccessStoris'
import Button from '../ui/Button'
import greenChart from "@/assets/images/successStories/greenChart.svg"
import redChart from "@/assets/images/successStories/redChart.svg"
import Image from 'next/image'
const SuccessStories = () => {

    const [activeTab, setActiveTab] = useState('withSpeedIn');

    return (
        <section className='py-20 max-w-[1200px]   2xl:max-w-[1440px] mx-auto px-4 mt-8'>
            <div className='flex flex-col md:flex-row md:gap-[163px]  md:items-center space-y-[px]'>
                <div className='md:hidden flex flex-col space-y-[6px]'>
                    <span className='text-medium-12 text-primary-500'>INCREASE PRODUCTIVITY</span>
                    <span className='text-bold-24 text-secondary-700'>Reduce Time in Doing <br />
                        Manual Work Managing <br />
                        Expenses
                    </span>
                </div>






                <div className=' w-full flex flex-col  justify-center items-start gap-6'>
                    <div className='hidden md:flex flex-col   gap-3 items-start'>
                        <span className='text-medium-20 text-primary-500'>INCREASE PRODUCTIVITY</span>
                        <span className='text-bold-40 text-secondary-700'>
                            Reduce Time in Doing Manual Work <br />
                            Managing Expenses
                        </span>
                    </div>



                </div>


            </div>
            <div className='mt-2 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8  items-start'>

                <div className='space-y-[32px] md:space-y-[20px]  flex borer flex-col justify-center  '>


                  

                    <div className=' bg-secondary-100 flex justify-between gap-1 max-w-[319px] rounded-[60px] lg:max-w-md'>
                        <Button
                            variant={activeTab === 'withSpeedIn' ? 'primary' : 'minimal'}
                            size='medium'
                            label='With speed In'
                            className='h-[45.08px] w-full text-medium-14'
                            onClick={() => setActiveTab('withSpeedIn')}
                        />
                        <Button
                            variant={activeTab === 'withoutSpeedIn' ? 'primary' : 'minimal'}
                            size='medium'
                            label='Without Speed.In'
                            className='h-[45.08px] w-full text-medium-14'
                            onClick={() => setActiveTab('withoutSpeedIn')}
                        />
                    </div>


                    {
                        activeTab === "withSpeedIn" && (
                            <div className='flex flex-col space-y-[32px] justify-center'>
                                <p className='text-bold-16 text-secondary-700 lg:hidden'>Track Business Expenses until its <br /> Milisecond</p>
                                <p className='text-bold-24 text-secondary-700 hidden lg:block'>Track Business Expenses until its Milisecond</p>

                                <LeftSuccessStories
                                    descriptionPhone='Analyze your business cost easily with group <br/> transaction thorugh tagging feature.'
                                    descriptionDestop='Analyze your business cost easily with group transaction <br/> through tagging feature.'
                                    icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" fill="#9CD323" />
                                    </svg>
                                    }
                                />

                                <LeftSuccessStories
                                    descriptionPhone="Add more than one card for payment. Integrated <br/> with more than 50+ payment method and support <br/> bulk payment."
                                    descriptionDestop="Add more than one card for payment. Integrated with more <br/> than 50+ payment method and support bulk payment."
                                    icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" fill="#9CD323" />
                                    </svg>
                                    }
                                />

                                <LeftSuccessStories
                                    descriptionPhone="Arrange your business expenses by date, name, <br/> etc.,  with just one click."
                                    descriptionDestop="Arrange your business expenses by date, name, etc.,  with <br/> just one click."
                                    icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" fill="#9CD323" />
                                    </svg>
                                    }
                                />
                            </div>
                        )
                    }

                    {
                        activeTab === "withoutSpeedIn" && (
                            <div className='flex flex-col space-y-[32px] justify-center'>
                                <p className='text-bold-16 text-secondary-700 lg:hidden'>Track Business Expenses until its <br /> Milisecond</p>
                                <p className='text-bold-24 text-secondary-700 hidden lg:block'>Track Business Expenses until its Milisecond</p>

                                <LeftSuccessStories
                                    descriptionPhone='Complex recording process due to every <br/> administrative file in a different place.'
                                    descriptionDestop='Complex recording process due to every administrative file <br/> in a different place.'
                                    icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM13.36 12.3C13.65 12.59 13.65 13.07 13.36 13.36C13.21 13.51 13.02 13.58 12.83 13.58C12.64 13.58 12.45 13.51 12.3 13.36L10 11.06L7.7 13.36C7.55 13.51 7.36 13.58 7.17 13.58C6.98 13.58 6.79 13.51 6.64 13.36C6.35 13.07 6.35 12.59 6.64 12.3L8.94 10L6.64 7.7C6.35 7.41 6.35 6.93 6.64 6.64C6.93 6.35 7.41 6.35 7.7 6.64L10 8.94L12.3 6.64C12.59 6.35 13.07 6.35 13.36 6.64C13.65 6.93 13.65 7.41 13.36 7.7L11.06 10L13.36 12.3Z" fill="#FF4423" />
                                    </svg>

                                    }
                                />

                                <LeftSuccessStories
                                    descriptionPhone="Need more effort to pay manually one by one <br/> invoice because there is no payment accommodation."
                                    descriptionDestop="Need more effort to pay manually one by one invoice <br/> because there is no payment accommodation."
                                    icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM13.36 12.3C13.65 12.59 13.65 13.07 13.36 13.36C13.21 13.51 13.02 13.58 12.83 13.58C12.64 13.58 12.45 13.51 12.3 13.36L10 11.06L7.7 13.36C7.55 13.51 7.36 13.58 7.17 13.58C6.98 13.58 6.79 13.51 6.64 13.36C6.35 13.07 6.35 12.59 6.64 12.3L8.94 10L6.64 7.7C6.35 7.41 6.35 6.93 6.64 6.64C6.93 6.35 7.41 6.35 7.7 6.64L10 8.94L12.3 6.64C12.59 6.35 13.07 6.35 13.36 6.64C13.65 6.93 13.65 7.41 13.36 7.7L11.06 10L13.36 12.3Z" fill="#FF4423" />
                                    </svg>

                                    }
                                />

                                <LeftSuccessStories
                                    descriptionPhone="Manual data arranging needs a long time because <br/> the different months/years are not in the same place."
                                    descriptionDestop="Manual data arranging needs a long time because the <br/> different months/years are not in the same place."
                                    icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM13.36 12.3C13.65 12.59 13.65 13.07 13.36 13.36C13.21 13.51 13.02 13.58 12.83 13.58C12.64 13.58 12.45 13.51 12.3 13.36L10 11.06L7.7 13.36C7.55 13.51 7.36 13.58 7.17 13.58C6.98 13.58 6.79 13.51 6.64 13.36C6.35 13.07 6.35 12.59 6.64 12.3L8.94 10L6.64 7.7C6.35 7.41 6.35 6.93 6.64 6.64C6.93 6.35 7.41 6.35 7.7 6.64L10 8.94L12.3 6.64C12.59 6.35 13.07 6.35 13.36 6.64C13.65 6.93 13.65 7.41 13.36 7.7L11.06 10L13.36 12.3Z" fill="#FF4423" />
                                    </svg>

                                    }
                                />
                            </div>
                        )

                    }
                </div>

                {/* Colonne droite - Card principale */}
                {activeTab === "withSpeedIn" && (

                    <div className='flex items-center justify-center  h-full'>

                        <Image
                            src={greenChart}
                            alt="Green Chart"
                            className='w-full md:max-w-[470px] rounded-[10.16px]'

                        />
                    </div>
                )}

                {activeTab === "withoutSpeedIn" && (

                    <div className='flex items-center justify-center  h-full'>

                        <Image
                            src={redChart}
                            alt="Green Chart"
                            className='w-full h-full  md:max-w-[470px] rounded-[10.16px]'

                        />
                    </div>
                )}


            </div>
        </section>
    )
}

export default SuccessStories