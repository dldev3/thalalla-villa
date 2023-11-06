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
                    <h1 className='lg:text-4xl text-3xl text-prime-green sub-heading'>Curious Minds</h1>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-28 gap-14 lg:mt-20 mt-10'>
                    <div>
                        <h1 className='text-prime-green lg:text-2xl text-xl p-tags'>What’s the minimum stay?</h1>
                        <p className='lg:text-xl text-lg mt-4 p-tags'>At least one night.</p>
                        <p className='lg:text-xl text-lg mt-4 p-tags'>But we offer discount for three nights and one week.</p>
                        <p className='lg:text-xl text-lg mt-4 p-tags'>Special rates for over 28 days.</p>
                    </div>
                    <div>
                        <h1 className='text-prime-green lg:text-2xl text-xl p-tags'>Is there Wi-Fi access?</h1>
                        <p className='lg:text-xl text-lg mt-4 p-tags'>Yes! With wireless connectivity</p>
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
