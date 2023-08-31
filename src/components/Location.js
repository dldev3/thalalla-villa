import React from 'react';
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Location() {
    return (
        <div className='bg-prime-bg-beige'>
            <div className='py-40'>
                <div>
                    <h1 className='text-6xl text-prime-green sub-heading px-96'>Our Location</h1>
                </div>
                <div className='flex flex-row space-x-12 mt-12 p-10'>
                    <div className='w-7/12'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9081.65332932356!2d80.62830079719183!3d5.9575138508796455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1396c038891eb%3A0x893d3c82bfa4d177!2sVilla%20by%20Tamarind%20Shade!5e0!3m2!1sen!2slk!4v1693464124504!5m2!1sen!2slk" className='w-full h-96' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='w-5/12'>
                        <div className=''>
                            <h1 className='text-2xl p-tags text-prime-green mt-8'>Talk to host</h1>
                            <p className='text-xl flex flex-row space-x-4 mt-10'><span><FaLocationArrow /></span><span className=' p-tags'>Egodahahena, Pathegama south, Pathegama South, Talalla 81180</span></p>
                            <p className='text-xl flex flex-row space-x-4 mt-4'><span><FaPhoneAlt /></span><span className='p-tags'>+94 717083469</span></p>
                            <p className='text-xl flex flex-row space-x-4 mt-4'><span><MdEmail /></span><span className='p-tags'>villabytamarindshade@gmail.com</span></p>
                        </div>
                        <div className='mt-10 flex flex-row space-x-4'>
                            <a href='#' className='text-xl px-4 py-2 bg-prime-green rounded-lg text-prime-bg-beige hover:text-prime-green hover:bg-prime-bg-beige hover:border-2 hover:border-prime-green'>Reserve Now</a>
                            <a href='#' className='text-xl px-4 py-2 bg-prime-green rounded-lg text-prime-bg-beige hover:text-prime-green hover:bg-prime-bg-beige hover:border-2 hover:border-prime-green'>Reviews</a>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Location
