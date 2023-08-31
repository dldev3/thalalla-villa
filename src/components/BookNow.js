import React from 'react'

const BookNow = () => {
    return (
        <div className='bg-prime-bg-beige'>
            <div className='flex flex-col justify-center items-center py-40 px-96'>
                <h1 className='text-6xl text-prime-green sub-heading text-center'>Reservations</h1>
                <p className='mt-6 text-xl text-center max-w-lg p-tags'>
                    Don’t just fantasize about it – make it happen! Book your dream vacation villa today and start counting down the days to blissful relaxation.
                </p>
                <div className='flex flex-row space-x-12 mt-8'>
                    <a className='w-10 h-10' href='#'><img src='/links-img/booking.png' /></a>
                    <a className='w-10 h-10' href='#'><img src='/links-img/airbnb.png' /></a>
                    <a className='w-10 h-10' href='#'><img src='/links-img/expedia.png' /></a>
                    <a className='w-10 h-10' href='#'><img src='/links-img/email.png' /></a>
                </div>

            </div>

        </div>
    )
}

export default BookNow

