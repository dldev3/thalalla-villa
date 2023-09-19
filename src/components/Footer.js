import React, { useEffect } from 'react'
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import ScrollOut from 'scroll-out';

const Footer = () => {

    useEffect(() => {
        ScrollOut({
            threshold: .8,
            once: false,
        });

        ScrollOut();

    }, []);

    return (
        <div className='bg-prime-bg-beige'>
            <div className='pb-16'>
                <div className='flex flex-row justify-center'>
                    <img src='/add/logo_new.jpg' className='lg:w-64 lg:h-64 w-32 h-32' />
                </div>
                <p className='mt-12 text-center main-logo-font text-3xl lg:text-4xl text-prime-green'>The Villa by Tamarind shade</p>
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-row space-x-5 justify-center items-center mt-4'>
                        <Link href="#" className='text-4xl text-prime-green'><FaInstagram /></Link>
                        <Link href="#" className='text-4xl text-prime-green'><FaFacebook /></Link>
                        <Link href="#" className='text-4xl text-prime-green'><FaTwitter /></Link>
                    </div>
                    {/* <div className='flex flex-col justify-center lg:flex-row lg:space-x-10 mt-6 space-y-2 lg:space-y-0 text-prime-green'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Gallery</Link>
                        <Link href="#">Reservation</Link>

                    </div> */}
                </div>
                <div className='mt-10 text-prime-green'>
                    <p className='text-sm text-center p-tags'>Copyright © 2023 ❤. All rights reserved.</p>

                </div>


            </div>


        </div>
    )
}

export default Footer

