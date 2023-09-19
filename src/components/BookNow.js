import React, { useEffect } from 'react';
import ScrollOut from 'scroll-out';

const BookNow = () => {

    useEffect(() => {
        ScrollOut({
            threshold: .8,
            once: false,
        });

        ScrollOut();
    }, []);
    return (
        <div className='bg-prime-bg-beige' id='reserve'>
            <div className='flex flex-col justify-center items-center py-40 px-96'>
                <h1 className='text-6xl text-prime-green sub-heading text-center'>Reservations</h1>
                <p className='mt-6 text-xl text-center max-w-lg p-tags'>
                    Don’t just fantasize about it – make it happen! Book your dream vacation villa today and start counting down the days to blissful relaxation.
                </p>
                <div className='flex flex-row space-x-12 mt-8'>
                    <a className='w-10 h-10' href='https://www.booking.com/hotel/lk/villa-by-tamarind-shade.html'><img src='/links-img/booking.png' /></a>
                    <a className='w-10 h-10' href='https://www.airbnb.com/rooms/761899470520901212?source_impression_id=p3_1693473562_ePceKhxHu%2B%2FhDX4X'><img src='/links-img/airbnb.png' /></a>
                    <a className='w-10 h-10' href='https://www.expedia.com/Calm-Cozy-Villa-By-The-Paddy-Field-Close-To-Beach.h95811974.Hotel-Information?chkin=2023-08-15&chkout=2023-08-16&x_pwa=1&rfrr=HSR&pwa_ts=1690871307795&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=6307703&destination=Talalla%2C+Southern+Province%2C+Sri+Lanka&destType=MARKET&latLong=5.953496%2C80.624367&sort=RECOMMENDED&top_dp=18&top_cur=USD&userIntent=&selectedRoomType=95811974&selectedRatePlan=00048d2301d731b84f38b12759e9004ad348&searchId=13c9afeb-703e-42f7-9470-a6d7f25a2dab'><img src='/links-img/expedia.png' /></a>
                    <a className='w-10 h-10' href='#'><img src='/links-img/email.png' /></a>
                </div>

            </div>

        </div>
    )
}

export default BookNow

