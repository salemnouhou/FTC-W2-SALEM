import React from 'react'
import Card from '../ui/Card'
import workOne from '@/assets/images/HowItWorks/workOne.svg'
import workTwo from '@/assets/images/HowItWorks/workTwo.svg'
import workTree from '@/assets/images/HowItWorks/workTree.svg'

const HowItWorks = () => {
    return (
        <div className='bg-secondary-700 px-4 py-20'>
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
           
            <div className='mt-4 md:mt-8  max-w-[1200px] 2xl:max-w-[1440px] mx-auto p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
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
    )
}

export default HowItWorks