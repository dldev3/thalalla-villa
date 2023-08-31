import React from 'react'
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-prime-bg-beige'>
            <div className='pt-24 pb-16'>
                <p className='text-center text-4xl'>🌿</p>
                <p className='text-center main-logo-font text-3xl lg:text-4xl text-prime-green'>The Villa by Tamarind shade</p>
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-row space-x-5 justify-center items-center mt-4'>
                        <Link href="#" className='text-4xl text-prime-green'><FaInstagram /></Link>
                        <Link href="#" className='text-4xl text-prime-green'><FaFacebook /></Link>
                        <Link href="#" className='text-4xl text-prime-green'><FaTwitter /></Link>
                    </div>
                    <div className='flex flex-col justify-center md:flex-row md:space-x-10 mt-6 space-y-2 md:space-y-0 text-prime-green'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Gallery</Link>
                        <Link href="#">Reservation</Link>

                    </div>
                </div>
                <div className='mt-10 text-prime-green'>
                    <p className='text-sm text-center p-tags'>Copyright © 2023 ❤. All rights reserved.</p>

                </div>

            </div>


        </div>
    )
}

export default Footer

