import React from 'react';
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Location() {
    return (
        <div className='bg-prime-bg-beige' id="location">
            <div className='py-40'>
                <div>
                    <h1 className='lg:text-4xl text-3xl text-prime-green sub-heading lg:px-96 px-8'>Our Location</h1>
                </div>
                <div className='flex lg:flex-row flex-col space-x-12 mt-12 lg:p-10'>
                    <div className='lg:w-7/12'>
                        <img className='w-full h-full object-cover' src='/add/map.jpg' alt='map-talalla' />
                    </div>
                    <div className='lg:w-5/12'>
                        <div className=''>
                            <h1 className='lg:text-2xl text-xl p-tags text-prime-green mt-8'>Talk to host: For better plans | Reservations</h1>
                            <p className='lg:text-xl text-lg flex flex-row space-x-4 mt-10'><span><FaLocationArrow /></span><span className=' p-tags'>Villa by tamarind shade, Pathegama South, Talalla, Koattagoda 81180</span></p>
                            <p className='lg:text-xl text-lg flex flex-row space-x-4 mt-4'><span><FaPhoneAlt /></span><span className='p-tags'>+94 717083469 | +94 712263959 </span></p>
                            <p className='lg:text-xl text-lg flex flex-row space-x-4 mt-4'><span><MdEmail /></span><span className='p-tags'>villa.tamarindshade@gmail.com</span></p>
                        </div>
                        <div className='lg:mt-10 mt-6 flex flex-row space-x-4'>
                            <a href='#reserve' className='lg:text-xl text-lg px-4 py-2 bg-prime-green rounded-lg text-prime-bg-beige hover:text-prime-green hover:bg-prime-bg-beige hover:border-2 hover:border-prime-green'>Reserve Now</a>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Location
