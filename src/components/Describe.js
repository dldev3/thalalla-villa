import React, { useEffect } from 'react';
import ScrollOut from 'scroll-out';
import { Image } from 'antd';

const Describe = () => {
    useEffect(() => {
        ScrollOut({
            threshold: .8,
            once: false,
        });

        ScrollOut();
    }, []);
    return (
        <div className='bg-prime-bg-beige' id='describe'>
            <div className='flex flex-col lg:py-28 lg:px-96 py-12 px-8'>
                <div className=''>
                    <div>
                        <h1 className='lg:text-4xl text-3xl sub-heading text-prime-green'>Unparalleled Luxuries</h1>
                    </div>
                    <div>
                        <p className='lg:text-xl text-lg p-tags lg:mt-4 mt-2'>Welcome to a world of comfort and elegance. Our villa offers unmatched luxuries of star class at affordable price tag. You will be amazed by its view of the nature, dusk and dawn under our sweet tamarind tree. The house is at the front of beautiful paddy field surrounded by large baby cinnamon plantation</p>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 lg:mt-10 mt-4'>
                        <Image src='/add/green1.jpg' className='rounded-2xl' />
                        <Image src='/add/green2.jpg' className='rounded-2xl' />
                        <Image src='/add/green3.jpg' className='rounded-2xl' />

                    </div>
                    <div>
                        <h1 className='lg:text-4xl text-3xl sub-heading mt-24 text-prime-green'>Astonishing Amenities</h1>
                        <p className='lg:text-xl text-lg p-tags mt-4'>Our amneties are personally selected to give you a feel like its' your second home. our canapy beds in master bedroom and in Gold room are hung with curtains to make your sleep much more comfortable. We offer you personalized toilet with hot water attached to each room. Our Platinum room is Air-conditioned but you just need to pay the energy cost only if you need. </p>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 lg:mt-10 mt-4'>
                        <img src='/add/amen1.jpg' className='object-cover w-96 h-72 rounded-xl' />
                        <img src='/add/amen2.jpg' className='object-cover w-96 h-72 rounded-xl' />
                        <img src='/add/amen3.jpg' className='object-cover w-96 h-72 rounded-xl' />
                        <img src='/add/amen4.jpg' className='object-cover w-96 h-72 rounded-xl' />
                        <img src='/add/amen5.jpg' className='object-cover w-96 h-72 rounded-xl' />
                        <img src='/add/amen6.jpg' className='object-cover w-96 h-72 rounded-xl' />
                    </div>

                    <p className='lg:text-xl text-lg p-tags mt-10'>We offer you free WiFi, Cleaned linen and towels, Satellite television and  BBQ grills to enjoy </p>

                    <div className='flex lg:flex-row flex-col lg:space-x-4 space-y-4 lg:space-y-0 mt-10'>
                        <img src='/add/amen7.jpg' className='w-96 h-72 object-cover rounded-xl' />
                        <img src='/add/amen8.jpg' className='w-96 h-72 object-cover rounded-xl' />
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 lg:mt-40 mt-16'>
                        <div className=''>
                            <h1 className='lg:text-4xl text-3xl sub-heading text-prime-green'>Nature-Inspired Reservations</h1>
                            <p className='lg:text-xl text-lg p-tags mt-4'>Book our eco-sensitive villa, offering a seamless blend of modern luxury, natural beauty, and sustainability.</p>
                        </div>

                        <div className=''>
                            <h1 className='lg:text-4xl text-3xl sub-heading text-prime-green'>Easy Booking & Unforgettable Experiences</h1>
                            <p className='lg:text-xl text-lg p-tags mt-4'>With our intuitive booking system, securing your stay in paradise has never been easier. Experience the extravagance of a lifetime!</p>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Describe

