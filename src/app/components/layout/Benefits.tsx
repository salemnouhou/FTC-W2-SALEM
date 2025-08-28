import React from 'react'
import { Card, LeftBenefit } from "@/app/components"
import BenefitOne from "../../../assets/images/Benefits/BenefitOne.png"
import BenefitTwo from "../../../assets/images/Benefits/BenefitTwo.png"
import BenefitTree from "../../../assets/images/Benefits/BenefitTree.png"
import Content from "../../../assets/images/Benefits/Content.svg"
import BenefitOneTest from "../../../assets/images/Benefits/BenefitOneTest.svg"
import BenefitTwoTest from "../../../assets/images/Benefits/BenefitTwoTest.svg"
import BenefitThreeTest from "../../../assets/images/Benefits/BenefitThreeTest.svg"

const Benefits = () => {
    return (
        <>
            <div className=' py-4 max-w-[1200px]   2xl:max-w-[1440px] mx-auto px-4'>
                <div className='flex flex-col md:flex-row md:gap-[163px]  md:items-center space-y-[6px]'>
                    <div className='md:hidden flex flex-col space-y-[6px]'>
                        <span className='text-medium-12 text-primary-500'>WHY USE SPEND.IN</span>
                        <span className='text-bold-24'>Easy, Simple, <br />
                            Affordable</span>
                    </div>

                    <div className='hidden md:flex flex-col space-y-[6px]'>
                        <span className='text-medium-20 text-primary-500'>WHY USE SPEND.IN</span>
                        <span className='text-bold-40 text-secondary-900'>Easy, Simple, <br />
                            Affordable</span>
                    </div>

                    <div className=' md:hidden text-secondary-400 text-regular-14'>
                        Our platform helps your business in managing expenses.
                        These are some of the reasons why you should use our
                        platform in managing business finances.
                    </div>
                    <div className='hidden md:block   font-light text-lg text-secondary-400'>
                        Our platform helps your business in managing <br /> expenses.
                        These are some of the reasons why you <br /> should use our
                        platform in managing business finances.
                    </div>

                </div>

                {/* BENEFITS CARDS SECTION */}
                <div className='mt-4 md:mt-8   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 '>
                    <div className=' md:max-w-[470px]  rounded-[10.16px]  '>
                        <Card variant='benefitsOne'
                            title='Automatic Invoice Payment'
                            description="No need to pay manually, we provide automatic <br /> invoice payment service! Set a payment schedule <br /> and you're done, it's that easy!"
                            image={BenefitOneTest}
                            benefitType='first'

                        />

                    </div>
                    <div className=' md:max-w-[470px]  rounded-[10.16px]  '>
                        <Card variant='benefitsOne'
                            title='Clear payment history'
                            description="Still writing manual expenses? Our platform breaks <br /> down every expense you log down to the <br /> millisecond!"
                            image={BenefitTwoTest}
                            benefitType='second'
                        />

                    </div>
                    <div className=' md:max-w-[470px]  rounded-[10.16px] '>
                        <Card variant='benefitsOne'
                            title='Use of multi-card payments'
                            description="Have more than 1 bank account or credit/debit card? <br /> Our platform is already integrated with many banks <br /> around the world, for easier payments!"
                            image={BenefitThreeTest}
                            benefitType='third'

                        />

                    </div>
                    <div className=' md:max-w-[470px] hidden sm:block lg:hidden  rounded-[10.16px]  '>
                        <Card variant='benefitsOne'
                            title='Automatic Invoice Payment'
                            description="No need to pay manually, we provide automatic <br /> invoice payment service! Set a payment schedule <br /> and you're done, it's that easy!"
                            image={BenefitOneTest}
                            benefitType='first'

                        />

                    </div>
                  

                </div>
            </div>


            <div className=' py-4 max-w-[1200px] lg:mt-14  2xl:max-w-[1440px] mx-auto px-4'>
                <div className='hidden md:flex  flex-col justify-center items-center md:items-center space-y-[6px]'>


                    <div className=' w-full flex flex-col justify-center items-center gap-6'>
                        <div className='hidden md:flex flex-col  text-center gap-6'>
                            <span className='text-medium-20 text-primary-500'>WHY USE SPEND.IN</span>
                            <span className='text-bold-40 text-secondary-900'>Easy, Simple,
                                Affordable</span>
                        </div>


                        <div className='hidden md:block text-center  max-w-2xl   font-light text-lg text-secondary-400'>
                        Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                        </div>
                    </div>

                </div>

                {/* BENEFITS CARDS 2 SECTION */}
               

<div className='mt-2 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-start'>
    <div className='space-y-6 flex flex-col justify-center h-full'>
        <LeftBenefit
            title='Automatic Invoice Payment'
            descriptionPhone='Automatic payments help you to arrange <br/> payments on a certain date without doing it <br/> manually again.'
            descriptionDestop='Automatic payments help you to arrange payments on a certain date without doing it manually again.'
            icon={<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.51996 9.92001C2.91836 9.92001 2.36156 10.1312 1.91996 10.4832C1.33116 10.9504 0.959961 11.6736 0.959961 12.48C0.959961 13.8944 2.10556 15.04 3.51996 15.04C4.16636 15.04 4.75516 14.7968 5.20956 14.4C5.74076 13.9328 6.07996 13.248 6.07996 12.48C6.07996 11.0656 4.93436 9.92001 3.51996 9.92001ZM4.15996 12.64C4.15996 12.8064 4.07036 12.9664 3.92956 13.0496L3.12956 13.5296C3.05276 13.5808 2.96316 13.6 2.87996 13.6C2.71996 13.6 2.55996 13.5168 2.47036 13.3696C2.33596 13.1392 2.40636 12.8448 2.63676 12.7104L3.20636 12.3712V11.68C3.19996 11.4176 3.41756 11.2 3.67996 11.2C3.94236 11.2 4.15996 11.4176 4.15996 11.68V12.64Z" fill="white"/>
                <path d="M9.82417 2.84802V5.28002H8.86417V2.84802C8.86417 2.67522 8.71057 2.59202 8.60817 2.59202C8.57617 2.59202 8.54417 2.59842 8.51217 2.61122L3.43697 4.52482C3.09777 4.65282 2.88017 4.97282 2.88017 5.33762V5.76642C2.29777 6.20162 1.92017 6.89922 1.92017 7.68642V5.33762C1.92017 4.57602 2.38737 3.89762 3.09777 3.62882L8.17937 1.70882C8.32017 1.65762 8.46737 1.63202 8.60817 1.63202C9.24817 1.63202 9.82417 2.15042 9.82417 2.84802Z" fill="white"/>
                <path d="M14.0802 9.6V10.24C14.0802 10.4128 13.9458 10.5536 13.7666 10.56H12.8322C12.493 10.56 12.1858 10.3104 12.1602 9.9776C12.141 9.7792 12.2178 9.5936 12.3458 9.4656C12.461 9.344 12.621 9.28 12.7938 9.28H13.7602C13.9458 9.2864 14.0802 9.4272 14.0802 9.6Z" fill="white"/>
                <path d="M12.7874 8.608H13.4402C13.7922 8.608 14.0802 8.32 14.0802 7.968V7.6864C14.0802 6.3616 12.9986 5.28 11.6738 5.28H4.32657C3.78257 5.28 3.28337 5.4592 2.88017 5.7664C2.29777 6.2016 1.92017 6.8992 1.92017 7.6864V8.8256C1.92017 9.0688 2.17617 9.2224 2.40657 9.1456C2.76497 9.024 3.14257 8.96 3.52017 8.96C5.45937 8.96 7.04017 10.5408 7.04017 12.48C7.04017 12.9408 6.91857 13.4464 6.72657 13.8944C6.62417 14.1248 6.78417 14.4 7.03377 14.4H11.6738C12.9986 14.4 14.0802 13.3184 14.0802 11.9936V11.872C14.0802 11.52 13.7922 11.232 13.4402 11.232H12.8834C12.269 11.232 11.6802 10.8544 11.5202 10.2592C11.3922 9.7728 11.5458 9.2992 11.8658 8.992C12.1026 8.7488 12.429 8.608 12.7874 8.608ZM9.28017 8.48H6.08017C5.81777 8.48 5.60017 8.2624 5.60017 8C5.60017 7.7376 5.81777 7.52 6.08017 7.52H9.28017C9.54257 7.52 9.76017 7.7376 9.76017 8C9.76017 8.2624 9.54257 8.48 9.28017 8.48Z" fill="white"/>
            </svg>}
        />
        
        <LeftBenefit
            title='Clear payment history'
            descriptionPhone="Clear payment history helps you to track your <br/> business expenses on specific dates."
            descriptionDestop="Clear payment history helps you to track your business expenses on specific dates."
            icon={<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.51996 9.92001C2.91836 9.92001 2.36156 10.1312 1.91996 10.4832C1.33116 10.9504 0.959961 11.6736 0.959961 12.48C0.959961 13.8944 2.10556 15.04 3.51996 15.04C4.16636 15.04 4.75516 14.7968 5.20956 14.4C5.74076 13.9328 6.07996 13.248 6.07996 12.48C6.07996 11.0656 4.93436 9.92001 3.51996 9.92001ZM4.15996 12.64C4.15996 12.8064 4.07036 12.9664 3.92956 13.0496L3.12956 13.5296C3.05276 13.5808 2.96316 13.6 2.87996 13.6C2.71996 13.6 2.55996 13.5168 2.47036 13.3696C2.33596 13.1392 2.40636 12.8448 2.63676 12.7104L3.20636 12.3712V11.68C3.19996 11.4176 3.41756 11.2 3.67996 11.2C3.94236 11.2 4.15996 11.4176 4.15996 11.68V12.64Z" fill="white"/>
                <path d="M9.82417 2.84802V5.28002H8.86417V2.84802C8.86417 2.67522 8.71057 2.59202 8.60817 2.59202C8.57617 2.59202 8.54417 2.59842 8.51217 2.61122L3.43697 4.52482C3.09777 4.65282 2.88017 4.97282 2.88017 5.33762V5.76642C2.29777 6.20162 1.92017 6.89922 1.92017 7.68642V5.33762C1.92017 4.57602 2.38737 3.89762 3.09777 3.62882L8.17937 1.70882C8.32017 1.65762 8.46737 1.63202 8.60817 1.63202C9.24817 1.63202 9.82417 2.15042 9.82417 2.84802Z" fill="white"/>
                <path d="M14.0802 9.6V10.24C14.0802 10.4128 13.9458 10.5536 13.7666 10.56H12.8322C12.493 10.56 12.1858 10.3104 12.1602 9.9776C12.141 9.7792 12.2178 9.5936 12.3458 9.4656C12.461 9.344 12.621 9.28 12.7938 9.28H13.7602C13.9458 9.2864 14.0802 9.4272 14.0802 9.6Z" fill="white"/>
                <path d="M12.7874 8.608H13.4402C13.7922 8.608 14.0802 8.32 14.0802 7.968V7.6864C14.0802 6.3616 12.9986 5.28 11.6738 5.28H4.32657C3.78257 5.28 3.28337 5.4592 2.88017 5.7664C2.29777 6.2016 1.92017 6.8992 1.92017 7.6864V8.8256C1.92017 9.0688 2.17617 9.2224 2.40657 9.1456C2.76497 9.024 3.14257 8.96 3.52017 8.96C5.45937 8.96 7.04017 10.5408 7.04017 12.48C7.04017 12.9408 6.91857 13.4464 6.72657 13.8944C6.62417 14.1248 6.78417 14.4 7.03377 14.4H11.6738C12.9986 14.4 14.0802 13.3184 14.0802 11.9936V11.872C14.0802 11.52 13.7922 11.232 13.4402 11.232H12.8834C12.269 11.232 11.6802 10.8544 11.5202 10.2592C11.3922 9.7728 11.5458 9.2992 11.8658 8.992C12.1026 8.7488 12.429 8.608 12.7874 8.608ZM9.28017 8.48H6.08017C5.81777 8.48 5.60017 8.2624 5.60017 8C5.60017 7.7376 5.81777 7.52 6.08017 7.52H9.28017C9.54257 7.52 9.76017 7.7376 9.76017 8C9.76017 8.2624 9.54257 8.48 9.28017 8.48Z" fill="white"/>
            </svg>}
        />
        
        <LeftBenefit
            title='Use of multi-card payments'
            descriptionPhone="Have more than one debit or credit card? Don't <br/> worry, we support payments using more than one <br/> card."
            descriptionDestop="Have more than one debit or credit card? Don't worry, we support payments using more than one card."
            icon={<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.51996 9.92001C2.91836 9.92001 2.36156 10.1312 1.91996 10.4832C1.33116 10.9504 0.959961 11.6736 0.959961 12.48C0.959961 13.8944 2.10556 15.04 3.51996 15.04C4.16636 15.04 4.75516 14.7968 5.20956 14.4C5.74076 13.9328 6.07996 13.248 6.07996 12.48C6.07996 11.0656 4.93436 9.92001 3.51996 9.92001ZM4.15996 12.64C4.15996 12.8064 4.07036 12.9664 3.92956 13.0496L3.12956 13.5296C3.05276 13.5808 2.96316 13.6 2.87996 13.6C2.71996 13.6 2.55996 13.5168 2.47036 13.3696C2.33596 13.1392 2.40636 12.8448 2.63676 12.7104L3.20636 12.3712V11.68C3.19996 11.4176 3.41756 11.2 3.67996 11.2C3.94236 11.2 4.15996 11.4176 4.15996 11.68V12.64Z" fill="white"/>
                <path d="M9.82417 2.84802V5.28002H8.86417V2.84802C8.86417 2.67522 8.71057 2.59202 8.60817 2.59202C8.57617 2.59202 8.54417 2.59842 8.51217 2.61122L3.43697 4.52482C3.09777 4.65282 2.88017 4.97282 2.88017 5.33762V5.76642C2.29777 6.20162 1.92017 6.89922 1.92017 7.68642V5.33762C1.92017 4.57602 2.38737 3.89762 3.09777 3.62882L8.17937 1.70882C8.32017 1.65762 8.46737 1.63202 8.60817 1.63202C9.24817 1.63202 9.82417 2.15042 9.82417 2.84802Z" fill="white"/>
                <path d="M14.0802 9.6V10.24C14.0802 10.4128 13.9458 10.5536 13.7666 10.56H12.8322C12.493 10.56 12.1858 10.3104 12.1602 9.9776C12.141 9.7792 12.2178 9.5936 12.3458 9.4656C12.461 9.344 12.621 9.28 12.7938 9.28H13.7602C13.9458 9.2864 14.0802 9.4272 14.0802 9.6Z" fill="white"/>
                <path d="M12.7874 8.608H13.4402C13.7922 8.608 14.0802 8.32 14.0802 7.968V7.6864C14.0802 6.3616 12.9986 5.28 11.6738 5.28H4.32657C3.78257 5.28 3.28337 5.4592 2.88017 5.7664C2.29777 6.2016 1.92017 6.8992 1.92017 7.6864V8.8256C1.92017 9.0688 2.17617 9.2224 2.40657 9.1456C2.76497 9.024 3.14257 8.96 3.52017 8.96C5.45937 8.96 7.04017 10.5408 7.04017 12.48C7.04017 12.9408 6.91857 13.4464 6.72657 13.8944C6.62417 14.1248 6.78417 14.4 7.03377 14.4H11.6738C12.9986 14.4 14.0802 13.3184 14.0802 11.9936V11.872C14.0802 11.52 13.7922 11.232 13.4402 11.232H12.8834C12.269 11.232 11.6802 10.8544 11.5202 10.2592C11.3922 9.7728 11.5458 9.2992 11.8658 8.992C12.1026 8.7488 12.429 8.608 12.7874 8.608ZM9.28017 8.48H6.08017C5.81777 8.48 5.60017 8.2624 5.60017 8C5.60017 7.7376 5.81777 7.52 6.08017 7.52H9.28017C9.54257 7.52 9.76017 7.7376 9.76017 8C9.76017 8.2624 9.54257 8.48 9.28017 8.48Z" fill="white"/>
            </svg>}
        />
    </div>

    {/* Colonne droite - Card principale */}
    <div className='flex items-center justify-center'>
        <div className='w-full md:max-w-[470px] rounded-[10.16px]'>
            <Card 
                variant='benefitsTwo'
               image={Content}
                benefitType='first'
            />
        </div>
    </div>
</div>

            </div>
        </>
    )
}

export default Benefits