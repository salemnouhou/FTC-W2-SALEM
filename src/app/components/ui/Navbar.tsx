

"use client"
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Logo from "@/app/components/ui/Logo"
import HamburgerMenu from './HamburgerMenu';
import ArrowDown from './ArrowDown';
import Button from './Button';
import Link from 'next/link';
import { motion } from "motion/react";
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Enregistrement du plugin GSAP pour le scroll animé
gsap.registerPlugin(ScrollToPlugin);

/**
 * Composant Navbar - Barre de navigation principale
 * 
 * Fonctionnalités :
 * - Navigation responsive (desktop/mobile)
 * - Menus déroulants pour Products et Company
 * - Animation de scroll avec GSAP
 * - Changement de style au scroll (transparent → opaque)
 * - Menu hamburger pour mobile
 * - Gestion des clics extérieurs
 * - Intégration du logo et des boutons CTA
 */
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);


    const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});


    interface ScrollToSection {
        (sectionId: string): void;
    }


    const scrollToSection: ScrollToSection = (sectionId) => {
        gsap.to(window, { duration: 1.5, scrollTo: sectionId, ease: "power2.inOut" });
        setIsMenuOpen(false);


    };



    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (openDropdown && dropdownRefs.current[openDropdown] &&
                !dropdownRefs.current[openDropdown].contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);

    const toggleDropdown = (dropdownName: string) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const toggleMobileDropdown = (dropdownName: string) => {
        setOpenMobileDropdown(openMobileDropdown === dropdownName ? null : dropdownName);
    };

    const dropdownMenus = {
        products: [
            { label: 'Business expense', href: '#' },
            { label: 'Corporate cards', href: '#' },
            { label: 'Reporting tools', href: '#' },
            { label: 'Banking integrations', href: '#' }
        ],
        company: [
            { label: 'About Us', href: '#' },
            { label: 'Our Team', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Contact', href: '#' }
        ]
    };

    return (
        // <nav className="bg-transparent relative border-[#FFFFFF29] border-b text-white w-screen z-50">
        <nav
            className={`
    relative bg-transparent border-b border-[#FFFFFF29] text-white w-screen z-50
    xl:fixed lg:top-0 lg:left-0 lg:transition-colors lg:duration-500
    ${scrolled ? "lg:bg-black/80 lg:backdrop-blur-lg" : "lg:bg-transparent lg:border-b lg:border-[#FFFFFF29]"}
  `}
        >
            <div className="max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4  md:py-3">
                    <Link href="/" className="flex items-center">
                        <Logo />
                    </Link>
                    <div className="hidden xl:block">

                        <motion.div
                            initial={{ opacity: 0, y: -43 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className=" ml-10 flex items-baseline space-x-4 gap-[40px]">
                            <div
                                className='relative flex justify-center items-center gap-[6px]'
                                ref={el => { dropdownRefs.current.products = el; }}
                            >
                                <button onClick={() => toggleDropdown('products')} className="font-light text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Products</button>
                                <button
                                    onClick={() => toggleDropdown('products')}
                                    className={`transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180' : ''}`}
                                >
                                    <ArrowDown />
                                </button>
                                {openDropdown === 'products' && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                                        <div className="py-2">
                                            {dropdownMenus.products.map((item, index) => (
                                                <a
                                                    key={index}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    {item.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className='flex justify-center items-center gap-1'>
                                <button onClick={() => scrollToSection('#benefits')} className="font-light  text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Benefit</button>
                            </div>

                            <div className='flex justify-center items-center gap-1'>
                                <button onClick={() => scrollToSection('#howitworks')} className="font-light text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">How it Works</button>
                            </div>

                            <div className='flex justify-center items-center gap-1'>
                                <button onClick={() => scrollToSection('#pricing')} className="font-light text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Pricing</button>
                            </div>

                            <div
                                className='relative flex justify-center items-center gap-[6px]'
                                ref={el => { dropdownRefs.current.company = el; }}
                            >
                                <button onClick={() => toggleDropdown('company')}
                                    className="font-light text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Company</button>
                                <button
                                    onClick={() => toggleDropdown('company')}
                                    className={`transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-180' : ''}`}
                                >
                                    <ArrowDown />
                                </button>
                                {openDropdown === 'company' && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                                        <div className="py-2">
                                            {dropdownMenus.company.map((item, index) => (
                                                <a
                                                    key={index}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    {item.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                    <div className='hidden xl:flex xl:justify-between lg:items-center gap-[32px]'>
                        <div>
                            <a href="" className='font-thin text-md text-secondary-200'>Login</a>
                        </div>
                        <div>
                            <Button
                                calNamespace="talk-to-an-expert"
                                calLink="optyven/talk-to-an-expert"
                                calConfig={{ layout: "month_view" }}
                                variant='primary'
                                size='large'
                                label='Get Demo'
                            />
                        </div>
                    </div>
                    <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 xl:hidden z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* MENU SIDEBAR AVEC DROPDOWNS */}
            <div className={`fixed top-0 right-0 w-4/5 h-full bg-gray-800 transform transition-transform duration-300 ease-in-out xl:hidden z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="px-4 py-6">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6  space-y-2">


                        {/* Products avec dropdown mobile */}
                        <div className="relative">
                            <button
                                onClick={() => toggleMobileDropdown('products')}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors"
                            >
                                Products
                                <svg
                                    className={`h-4 w-4 transform transition-transform duration-200 ${openMobileDropdown === 'products' ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Sous-menu Products */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === 'products' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="ml-4 mt-2 space-y-1 border-l-2 border-primary pl-4">
                                    {dropdownMenus.products.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                                            onClick={() => {
                                                setOpenMobileDropdown(null);
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button onClick={() => scrollToSection('#benefits')} className="block text-start  w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors">
                            Benefit
                        </button>

                        <button onClick={() => scrollToSection('#howitworks')} className="block text-start  w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors">
                            How It Works
                        </button>

                        <button onClick={() => scrollToSection('#pricing')} className="block text-start  w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors">
                            Pricing
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => toggleMobileDropdown('company')}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors"
                            >
                                Company
                                <svg
                                    className={`h-4 w-4 transform transition-transform duration-200 ${openMobileDropdown === 'company' ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === 'company' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="ml-4 mt-2 space-y-1 border-l-2 border-primary pl-4">
                                    {dropdownMenus.company.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                                            onClick={() => {
                                                setOpenMobileDropdown(null);
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>



                        {/* Button Get Demo */}
                        <div className="pt-4 space-y-4">
                            <Button variant='minimal' label='Login' size='large' className="w-full bg-secondary-400/50 text-white" />
                            <Button
                                calNamespace="talk-to-an-expert"
                                calLink="optyven/talk-to-an-expert"
                                calConfig={{ layout: "month_view" }}
                                label='Get Demo' size='large' className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar