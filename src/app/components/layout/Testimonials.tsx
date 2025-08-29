import React from 'react'
import Card from '../ui/Card'
import firstTestimony from '@/assets/images/testimony/firstTestimony.svg'
import secondTestimony from '@/assets/images/testimony/secondTestimony.svg'
import thirdTestimony from '@/assets/images/testimony/thirdTestimony.svg'
import Button from '../ui/Button'

const Testimonials = () => {
    return (
        <section className='bg-secondary-700 py-20'>
            {/* HOW IT WORKS ONE */}

            <div className='bg-secondary-700 px-4 '>
                <div className='flex flex-col md:flex-row md:gap-[163px]  md:items-center space-y-[px]'>
                    <div className='md:hidden flex flex-col space-y-[6px] mb-2'>
                        <span className='text-medium-12 text-primary-500'>WHAT THEY SAY</span>
                        <span className='text-bold-24 text-white'> Our User Kind Words</span>
                    </div>



                    <div className=' md:hidden text-secondary-400 text-regular-14 '>
                        Here are some testimonials from our user after <br />
                        using Spend.In to manage their business <br />
                        expenses.
                    </div>

                    <div className=' w-full flex flex-col justify-center items-center gap-6'>
                        <div className='hidden md:flex flex-col  text-center gap-6'>
                            <span className='text-medium-20 text-primary-500'>WHAT THEY SAY</span>
                            <span className='text-bold-40 text-white'>Our User Kind Words</span>
                        </div>


                        <div className='hidden md:block text-center  max-w-2xl   font-light text-lg text-secondary-300'>
                            Here are some testimonials from our user after using Spend.In <br />
                            to manage their business  expenses.
                        </div>
                    </div>


                </div>

                <div className='mt-4 md:mt-8     max-w-[1200px] 2xl:max-w-[1440px] mx-auto py-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 lg:gap-16 xl:gap-20 '>
                    <div className='w-full    mx-auto '>
                        <Card
                            variant='testimonial'
                            testimonyImage={firstTestimony}
                            testimonyTitle='It’s just incredible!'
                            testimonyDescription='
                            It’s just 1 month since I’m using Spend.In to manage my business expenses,
                             but the result is very satisfying! 
                            My business finance now more neat than before, thanks to Spend.In!'
                            testimonyDescriptionDesktop='
                            It’s just 1 month since I’m using Spend.In to manage my business expenses,
                             but the  result is very satisfying! 
                            My business finance now more neat than before, thanks to  Spend.In!'
                            testimonyAuthor='Jimmy Bartney'
                            testimonyRole='Product Manager at Picko Lab'
                        />
                    </div>

                    <div className='w-full  mx-auto rounded-[10.16px]'>
                        <Card
                            variant='testimonial'
                            testimonyImage={secondTestimony}
                            testimonyTitle='Satisfied User Here!'
                            testimonyDescription='
                            Never thought that with Spend.In managing  my business expenses 
                            is so easy! Been using this platform for 3 months and still counting!'
                            testimonyDescriptionDesktop='
                            Never thought that with Spend.In managing  my business expenses 
                            is so easy! Been  using this platform for 3 months and still counting!'
                            testimonyAuthor='Natasha Romanoff'
                            testimonyRole='Black Widow'
                        />
                    </div>

                    <div className='w-full  mx-auto md:col-span-2 lg:col-span-2 xl:col-span-1 rounded-[10.16px]'>
                        <Card
                            variant='testimonial'
                            testimonyImage={thirdTestimony}
                            testimonyTitle='It’s just incredible!'
                            testimonyDescription='
                           “The best”! That’s what I want to say to this platform, didn’t know that there’s a 
                           platform to help you manage your
                            business expenses like this! Very recommended to you who have a big business!'
                            testimonyDescriptionDesktop='
                             “The best”! That’s what I want to say to this platform, didn’t know that there’s a
                           platform to help you manage your
                            business expenses like this! Very recommended to  you who have a big business!
                            '
                            testimonyAuthor='Moritika'
                            testimonyRole='Finance Manager at Mangan'
                        />
                    </div>


                </div>
                <div className=' hidden lg:flex gap-6 lg:justify-center lg:items-center  max-w-5xl mx-auto border-secondary-600'>

                    <button className='h-[48px] w-[48px]  hover:h-[50px] hover:w-[50px] bg-secondary-400/10 hover:bg-primary  transition-all duration-300 hover:shadow-primary-600 hover:shadow-md hover:shadow-primary-500 flex justify-center items-center  rounded-full'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1775 4.44727L2.625 8.99977L7.1775 13.5523" stroke="#C3D4E9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.3749 9H2.75244" stroke="#C3D4E9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>


                    <button className='h-[48px] w-[48px] hover:h-[50px] hover:w-[50px] bg-secondary-400/10 hover:bg-primary  transition-all duration-300 hover:shadow-primary-600 hover:shadow-md hover:shadow-primary-500 flex justify-center items-center  rounded-full'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8225 4.44727L15.375 8.99977L10.8225 13.5523" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.625 9H15.2475" stroke="white"strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button>
                </div>


            </div>






        </section>
    )
}

export default Testimonials