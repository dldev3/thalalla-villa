import React, { useEffect } from 'react';
import ScrollOut from 'scroll-out';

function CuriousMinds() {

    useEffect(() => {
        ScrollOut({
            threshold: .8,
            once: true,
        });

        ScrollOut();
    }, []);

    return (

        <div className='flex flex-row justify-center bg-prime-bg-beige' id='curious'>

            <div className='flex flex-col lg:px-96 py-12 px-8'>
                <div>
                    <h1 className='lg:text-5xl text-3xl text-prime-green sub-heading'>Curious Minds</h1>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-28 gap-14 lg:mt-20 mt-10'>
                    <div className=''>
                        <h1 className='text-prime-green lg:text-2xl text-xl p-tags'>Are pets allowed?</h1>
                        <p className='lg:text-xl text-lg mt-4 p-tags'>No, unfortunately pets are not welcome.</p>
                    </div>
                    <div>
                        <h1 className='text-prime-green lg:text-2xl text-xl p-tags'>What’s the minimum stay?</h1>
                        <p className='lg:text-xl text-lg mt-4 p-tags'>The minimum stay at our villas is three nights.</p>
                    </div>
                    <div>
                        <h1 className='text-prime-green lg:text-2xl text-xl p-tags'>Is there Wi-Fi access?</h1>
                        <p className='lg:text-xl text-lg mt-4 p-tags'>Absolutely! Enjoy complimentary high-speed Wi-Fi in our villa</p>
                    </div>
                    <div>
                        <h1 className='text-prime-green lg:text-2xl text-xl p-tags'>Are meals included?</h1>
                        <p className='lg:text-xl text-lg mt-4 p-tags'>Your villa comes with a fully-equipped kitchen, but meal plans are available at an additional cost.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CuriousMinds
