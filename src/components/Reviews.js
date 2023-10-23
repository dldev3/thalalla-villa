import React from 'react';
import { Image } from 'antd';

const Reviews = () => {
    return (
        <div className='bg-prime-bg-beige' id="review">
            <div className='lg:px-96 py-12 px-8'>
                <div>
                    <h1 className='lg:text-5xl text-3xl text-prime-green sub-heading'>We enjoyed...</h1>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                    <Image src='/add/Review01.jpg' className='rounded-2xl' />
                    <Image src='/add/Review02.jpg' className='rounded-2xl' />
                </div>

            </div>
        </div>
    )
}

export default Reviews
