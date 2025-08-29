"use client";
import { useState } from 'react';
import Button from '../ui/Button';
import { motion } from "motion/react"
import Tilt from 'react-parallax-tilt'

const Pricing = () => {
    const defaultOptions = {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.1,    
        speed: 1000,  
        transition: true, 
        axis: null,    
        reset: true,    
        easing: "cubic-bezier(.03,.98,.52,.99)",   
    }
    const [isYearly, setIsYearly] = useState(true);

    const plans = [
        {
            name: 'Free',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.0666 13.2129C23.56 13.2129 22.2133 13.9462 21.3733 15.0662C20.5333 13.9462 19.1867 13.2129 17.68 13.2129C15.1333 13.2129 13.0667 15.2929 13.0667 17.8529C13.0667 18.8396 13.2266 19.7596 13.4933 20.5996C14.8 24.7462 18.8533 27.2396 20.8533 27.9196C21.1333 28.0129 21.6 28.0129 21.88 27.9196C23.88 27.2396 27.9333 24.7596 29.24 20.5996C29.52 19.7462 29.6667 18.8396 29.6667 17.8529C29.68 15.2929 27.6133 13.2129 25.0666 13.2129Z" fill="#7C5CFC" />
                <path d="M27.6666 11.1205C27.6666 11.4271 27.36 11.6271 27.0666 11.5471C25.2666 11.0805 23.2933 11.4671 21.8 12.5338C21.5066 12.7471 21.1066 12.7471 20.8266 12.5338C19.7733 11.7605 18.4933 11.3338 17.1466 11.3338C13.7066 11.3338 10.9066 14.1471 10.9066 17.6138C10.9066 21.3738 12.7066 24.1871 14.52 26.0671C14.6133 26.1605 14.5333 26.3205 14.4133 26.2671C10.7733 25.0271 2.66663 19.8805 2.66663 11.1205C2.66663 7.25379 5.77329 4.13379 9.61329 4.13379C11.8933 4.13379 13.9066 5.22712 15.1733 6.92046C16.4533 5.22712 18.4666 4.13379 20.7333 4.13379C24.56 4.13379 27.6666 7.25379 27.6666 11.1205Z" fill="#7C5CFC" />
            </svg>

            ,
            description: 'Perfect plan to get started',
            monthlyPrice: 0,
            yearlyPrice: 0,
            features: [
                { name: 'Sync accross device', active: true },
                { name: '5 workspace', active: true },
                { name: 'Collaborate with 5 users', active: true },
                { name: 'Sharing permission', active: false },
                { name: 'Admin tools', active: false },
                { name: '100+ integrations', active: false }
            ],
            buttonText: 'Get Your Free Plan',
            buttonColor: 'bg-purple-500 hover:bg-purple-600'
        },
        {
            name: 'Pro',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3333 7.61333V20.3867C29.3333 24.0667 26.3467 27.0533 22.6667 27.0533H9.33335C8.72001 27.0533 8.13335 26.9733 7.56001 26.8133C6.73335 26.5867 6.46668 25.5333 7.08001 24.92L21.2533 10.7467C21.5467 10.4533 21.9867 10.3867 22.4 10.4667C22.8267 10.5467 23.2933 10.4267 23.6267 10.1067L27.0533 6.66666C28.3067 5.41333 29.3333 5.82666 29.3333 7.61333Z" fill="#7C5CFC" />
                <path d="M19.52 9.81336L5.55996 23.7734C4.91996 24.4134 3.85329 24.2534 3.42663 23.4534C2.93329 22.5467 2.66663 21.4934 2.66663 20.3867V7.61336C2.66663 5.82669 3.69329 5.41336 4.94663 6.66669L8.38663 10.12C8.90663 10.6267 9.75996 10.6267 10.28 10.12L15.0533 5.33336C15.5733 4.81336 16.4266 4.81336 16.9466 5.33336L19.5333 7.92003C20.04 8.44003 20.04 9.29336 19.52 9.81336Z" fill="#7C5CFC" />
            </svg>
            ,
            description: 'Perfect plan for professionals!',
            monthlyPrice: 20,
            yearlyPrice: 12,
            features: [
                { name: 'Everything in Free Plan', active: true },
                { name: 'Unlimited workspace', active: true },
                { name: 'Collaborative workspace', active: true },
                { name: 'Sharing permission', active: true },
                { name: 'Admin tools', active: true },
                { name: '100+ integrations', active: true }
            ],
            buttonText: 'Get Your Free Plan',
            buttonColor: 'bg-purple-500 hover:bg-purple-600',
            popular: true
        },
        {
            name: 'Ultimate',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.88 14.2929H19.76V4.69287C19.76 2.45287 18.5467 1.99954 17.0667 3.67954L16 4.89287L6.97335 15.1595C5.73335 16.5595 6.25335 17.7062 8.12002 17.7062H12.24V27.3062C12.24 29.5462 13.4533 29.9995 14.9333 28.3195L16 27.1062L25.0267 16.8395C26.2667 15.4395 25.7467 14.2929 23.88 14.2929Z" fill="#7C5CFC" />
            </svg>
            ,
            description: 'Best suits for great company!',
            monthlyPrice: 40,
            yearlyPrice: 33,
            features: [
                { name: 'Everything in Pro Plan', active: true },
                { name: 'Daily performance reports', active: true },
                { name: 'Dedicated assistant', active: true },
                { name: 'Artificial intelligence', active: true },
                { name: 'Marketing tools & automations', active: true },
                { name: 'Advanced security', active: true }
            ],
            buttonText: 'Get Your Free Plan',
            buttonColor: 'bg-purple-500 hover:bg-purple-600'
        }
    ];

    const handleToggle = () => {
        setIsYearly(!isYearly);
    };

    return (
        <section id='pricing' className="min-h-screen  py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-bold-24 lg:text-bold-40 font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                    </h1>
                    <p className="text-secondary-400 text-regular-14 lg:text-regular-20">
                        Choose a plan that suits your business needs
                    </p>
                </div>

                <div className=' flex justify-center mb-12 items-center '>
                    <div className="flex  relative  flex-col gap-4 justify-center items-center">
                        <div>
                            <span className={`text-medium-20 font-medium mr-4 ${!isYearly ? 'text-secondary-700' : 'text-gray-500'}`}>
                                Monthly
                            </span>
                            <button
                                onClick={handleToggle}
                                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                            <span className={`text-lg font-medium ml-4 ${isYearly ? 'text-secondary-700' : 'text-gray-500'}`}>
                                Yearly
                            </span>
                        </div>
                        {isYearly && (
                            <div className="ml-4">
                                <span className="bg-primary-100 text-secondary-700 text-regular-14 font-medium px-[12px] py-[4px] rounded-full">
                                    Save 65%
                                </span>

                            </div>
                        )}
                        {isYearly && (

                            <div className='absolute -right-4 top-3'>
                                <svg width="70" height="69" viewBox="0 0 75 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_52_2366)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M47.9733 23.9621C48.0497 24.4127 48.1178 24.8005 48.1549 25.0053C48.3835 26.2507 48.5758 29.413 49.4575 31.5637C50.1296 33.2047 51.2037 34.2635 52.8374 33.8822C54.3222 33.5356 55.2464 32.0553 55.6913 30.0088C56.6486 25.6043 55.4942 18.5679 54.5965 16.5323C54.4983 16.3101 54.2396 16.2094 54.0174 16.3075C53.7962 16.4051 53.6955 16.6638 53.7937 16.886C54.6546 18.8397 55.7526 25.5942 54.8337 29.8226C54.4742 31.4753 53.8368 32.7475 52.6373 33.0273C51.4536 33.304 50.7571 32.4208 50.2699 31.2312C49.4114 29.1383 49.2404 26.0595 49.0185 24.8467C48.879 24.0865 48.4288 21.1721 48.33 20.9316C48.2066 20.6304 47.9511 20.6386 47.8675 20.6476C47.8026 20.6545 47.4816 20.7097 47.4671 21.1085C47.2561 26.7945 42.9968 35.3736 36.7318 41.1166C30.5219 46.8091 22.3116 49.7125 14.0863 44.0656C13.8863 43.9288 13.6128 43.9797 13.4755 44.1788C13.3387 44.3788 13.3896 44.6523 13.5897 44.7891C22.2081 50.7057 30.8191 47.7277 37.3247 41.7642C42.8077 36.7383 46.7734 29.5895 47.9733 23.9621Z" fill="#0D121F" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.3049 44.6629C15.3364 44.5779 16.3661 44.5262 17.3916 44.361C20.1238 43.9215 22.8697 42.8862 25.0856 41.2122C25.2792 41.0652 25.317 40.7901 25.1715 40.5969C25.0246 40.4033 24.7494 40.3656 24.5563 40.5111C22.4542 42.1011 19.8446 43.0771 17.2524 43.4939C16.0785 43.6823 14.8976 43.7203 13.7162 43.833C13.6573 43.8393 13.1425 43.8726 13.0357 43.9095C12.7867 43.994 12.7375 44.188 12.7263 44.2806C12.7159 44.358 12.7221 44.453 12.7723 44.5592C12.814 44.646 12.9319 44.7923 13.1312 44.9543C13.7677 45.4754 15.4268 46.4776 15.6818 46.6709C18.6043 48.8866 20.9513 51.4386 23.4894 54.0636C23.6585 54.2372 23.9368 54.2422 24.111 54.0741C24.2851 53.906 24.2892 53.6281 24.121 53.454C21.551 50.7955 19.1707 48.2146 16.2123 45.9724C16.0375 45.8389 15.0289 45.1531 14.3049 44.6629Z" fill="#0D121F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_52_2366">
                                            <rect width="57.0685" height="50.03" fill="white" transform="translate(74.1775 45.3682) rotate(153.036)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>

                        )}
                    </div>
                </div>

                <div className="flex  flex-col lg:flex-row  lg:justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1.05}  key={plan.name}  >
                        
                        <motion.div
                        initial={{ opacity: 0, y: 43 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}

                           
                            className={` relative bg-secondary-100/20 rounded-[12px] shadow-sm  p-8 transition-all duration-200 hover:shadow-lg w-full lg:w-80 lg:flex-shrink-0 ${plan.popular ? 'border-purple-200 shadow-lg' : 'border-gray-200'
                                }`}
                        >


                            <div className="flex  items-center justify-between mb-4">
                                <div className='flex itms-center'>
                                    {plan.icon}
                                    <h3 className="text-medium-24 font-bold text-gray-900 ml-2">{plan.name}</h3>
                                </div>
                                {plan.popular && (
                                    <div className="">
                                        <span className="bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded-full">
                                            Popular
                                        </span>
                                    </div>
                                )}
                            </div>

                            <p className="text-gray-600 text-regular-14 mb-6">{plan.description}</p>


                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-gray-900">
                                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-secondary-400 text-medium-14 ml-1">/month</span>
                                </div>
                                {/* {isYearly && plan.monthlyPrice > 0 && (
                                    <p className="text-sm text-gray-500 mt-1">
                                        Billed annually (${(plan.yearlyPrice * 12).toFixed(0)}/year)
                                    </p>
                                )} */}
                            </div>

                            <div className="mb-8">
                                {plan.name === 'Free' && (
                                    <p className="text-regular-14 text-gray-600">
                                        A free plan grants you access to some cool features of Spend.In.
                                    </p>
                                )}
                                {plan.name === 'Pro' && (
                                    <p className="text-regular-14 text-gray-600">
                                        For professional only! Start arranging your experiences with our best templates.
                                    </p>
                                )}
                                {plan.name === 'Ultimate' && (
                                    <p className="text-regular-14 text-gray-600">
                                        If you a finance manager at big company, this plan is a perfect match.
                                    </p>
                                )}
                            </div>

                            <div className="mb-8 space-y-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center">
                                        {feature.active ? (
                                            <div className="flex-shrink-0 w-[20px] h-[20px] bg-green-100 rounded-full flex items-center justify-center">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" fill="#9CD323" />
                                                </svg>

                                            </div>
                                        ) : (
                                            <div className="flex-shrink-0 w-[20px] h-[20px] bg-gray-100 rounded-full flex items-center justify-center">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM13.36 12.3C13.65 12.59 13.65 13.07 13.36 13.36C13.21 13.51 13.02 13.58 12.83 13.58C12.64 13.58 12.45 13.51 12.3 13.36L10 11.06L7.7 13.36C7.55 13.51 7.36 13.58 7.17 13.58C6.98 13.58 6.79 13.51 6.64 13.36C6.35 13.07 6.35 12.59 6.64 12.3L8.94 10L6.64 7.7C6.35 7.41 6.35 6.93 6.64 6.64C6.93 6.35 7.41 6.35 7.7 6.64L10 8.94L12.3 6.64C12.59 6.35 13.07 6.35 13.36 6.64C13.65 6.93 13.65 7.41 13.36 7.7L11.06 10L13.36 12.3Z" fill="#596780" />
                                                </svg>

                                            </div>
                                        )}
                                        <span className={`ml-3 text-medium-14 lg:text-medium-18 ${feature.active ? 'text-secondary-700' : 'text-secondary-400'}`}>
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>



                            <Button
                                className={`w-full py-3 px-4 ${plan.name === "Free" ? "md:mt-12" : plan.name === "Ultimate" ? "" : "md:mt-8"}  text-white lg:text-medium-16 text-medium-14 transition-colors `}
                                label={plan.buttonText}
                                size='large'
                            />
                        </motion.div>
                                             </Tilt>
                        
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;