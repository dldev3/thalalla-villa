import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <div className='bg-landing bg-cover h-screen'>
                <div className=''>
                    <div className='p-20'>
                        <h1 className='text-8xl main-logo-font text-center text-white'>The Villa By Tamarind Shade</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-40'>
                        <h1 className='text-6xl text-white sub-heading tracking-wider'>A place to escape</h1>
                        <p className='tracking-wide sub-heading text-4xl text-center mt-16 max-w-5xl text-prime-bg-beige'>Discover the serenity of Villa by Tamarind Shade, an exquisite oasis where lush greenery meets pristine white sands.</p>
                    </div>
                    <div className='flex flex-row space-x-4 justify-center mt-24'>
                        <a href='#' className='text-2xl px-4 py-2 bg-prime-green rounded-lg text-prime-bg-beige hover:text-prime-green hover:bg-prime-bg-beige hover:border-2 hover:border-prime-green'>Discover More</a>
                        <a href='#' className='text-2xl px-4 py-2 bg-prime-green rounded-lg text-prime-bg-beige hover:text-prime-green hover:bg-prime-bg-beige hover:border-2 hover:border-prime-green'>Reserve Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

