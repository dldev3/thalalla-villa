import React from 'react'

function CuriousMinds() {
    return (

        <div className='flex flex-row justify-center bg-prime-bg-beige'>

            <div className='flex flex-col py-16 px-96'>
                <div>
                    <h1 className='text-6xl text-prime-green sub-heading'>Curious Minds</h1>
                </div>

                <div className='grid grid-cols-2 gap-28 mt-20'>
                    <div className=''>
                        <h1 className='text-prime-green text-2xl p-tags'>Are pets allowed?</h1>
                        <p className='text-xl mt-4 p-tags'>No, unfortunately pets are not welcome.</p>
                    </div>
                    <div>
                        <h1 className='text-prime-green text-2xl p-tags'>What’s the minimum stay?</h1>
                        <p className='text-xl mt-4 p-tags'>The minimum stay at our villas is three nights.</p>
                    </div>
                    <div>
                        <h1 className='text-prime-green text-2xl p-tags'>Is there Wi-Fi access?</h1>
                        <p className='text-xl mt-4 p-tags'>Absolutely! Enjoy complimentary high-speed Wi-Fi in our villa</p>
                    </div>
                    <div>
                        <h1 className='text-prime-green text-2xl p-tags'>Are meals included?</h1>
                        <p className='text-xl mt-4 p-tags'>Your villa comes with a fully-equipped kitchen, but meal plans are available at an additional cost.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CuriousMinds
