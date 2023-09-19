import React, { useEffect } from 'react'
import Link from 'next/link'
import ScrollOut from 'scroll-out';


const Header = () => {

    useEffect(() => {
        ScrollOut({
            threshold: .8,
            once: false,
        });

        ScrollOut();
    }, []);

    return (
        <div>
            <div className='bg-landing bg-cover lg:h-screen'>
                <div className=''>
                    <div className='lg:p-20 p-12'>
                        <h1 className='lg:text-8xl text-5xl main-logo-font text-center text-white'>Villa By Tamarind Shade</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-40'>
                        <h1 className='text-3xl lg:text-6xl text-white sub-heading lg:tracking-wider text-center'>Your Home Away from Home</h1>
                        <p className='tracking-wide sub-heading text-xl lg:text-4xl text-center mt-16 max-w-5xl text-prime-bg-beige'>Discover the serenity of Villa by Tamarind Shade, an exquisite oasis where lush greenery meets pristine white sands.</p>
                    </div>
                    <div className='flex flex-row space-x-4 justify-center lg:mt-24 mt-12 py-10'>
                        <a href='#describe' className='text-lg lg:text-2xl lg:px-4 px-2 py-2 bg-prime-green rounded-lg text-prime-bg-beige hover:text-prime-green hover:bg-prime-bg-beige hover:border-2 hover:border-prime-green'>Discover More</a>
                        <a href='#reserve' className='text-lg lg:text-2xl lg:px-4 px-2 py-2 bg-prime-green rounded-lg text-prime-bg-beige hover:text-prime-green hover:bg-prime-bg-beige hover:border-2 hover:border-prime-green'>Reserve Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

