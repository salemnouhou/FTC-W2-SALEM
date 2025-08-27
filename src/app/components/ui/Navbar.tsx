"use client"
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Logo from "@/app/components/ui/Logo"
import HamburgerMenu from './HamburgerMenu';
import ArrowDown from './ArrowDown';
import Button from './Button';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
        <nav className="bg-transparent border-[#FFFFFF29] border-b text-white relative z-50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-6 md:py-4">
                    <Link href="/" className="flex items-center">
                        <Logo/>
                    </Link>
                    <div className="hidden xl:block">
                        <div className="ml-10 flex items-baseline space-x-4 gap-[40px]">
                            <div 
                                className='relative flex justify-center items-center gap-[6px]'
                                ref={el => { dropdownRefs.current.products = el; }}
                            >
                                <a href="#" className="font-light text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Products</a>
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
                                <a href="#" className="font-light text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Benefit</a>
                            </div>

                            <div className='flex justify-center items-center gap-1'>
                                <a href="#" className="font-light text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">How it Works</a>
                            </div>

                            <div className='flex justify-center items-center gap-1'>
                                <a href="#" className="font-light text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Pricing</a>
                            </div>

                            <div 
                                className='relative flex justify-center items-center gap-[6px]'
                                ref={el => { dropdownRefs.current.company = el; }}
                            >
                                <a href="#" className="font-light text-md py-2 rounded-md font-jakarta relative  cursor-pointer font-sans  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Company</a>
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
                        </div>
                    </div>
                    <div className='hidden xl:flex xl:justify-between lg:items-center gap-[32px]'>
                        <div>
                            <a href="" className='font-thin text-md text-secondary-200'>Login</a>
                        </div>
                        <div>
                            <Button
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
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 xl:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div className={`fixed top-0  right-0 w-4/5 h-full bg-gray-800 transform transition-transform duration-300 ease-in-out xl:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="px-4 py-6 ">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-300 hover:text-white"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 space-y-4 ">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Home</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">About</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Services</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar