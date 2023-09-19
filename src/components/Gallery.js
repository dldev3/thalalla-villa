import React from 'react'
import { Image } from 'antd';


function Gallery() {
    return (
        <div className='bg-prime-bg-beige' id='gallery'>
            <div className='flex flex-col py-6 px-96'>
                <div>
                    <h1 className='text-6xl text-prime-green sub-heading'>Must see</h1>
                </div>
                <Image.PreviewGroup>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                        <div class="grid gap-4">
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal1.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal2.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal3.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal4.jpg" alt="" />
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal5.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal6.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal7.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal14.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/amen6.jpg" alt="" />
                            </div>

                        </div>
                        <div class="grid gap-4">
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal8.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal9.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal10.jpg" alt="" />
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal11.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal12.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal13.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/gal15.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/add/amen5.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                </Image.PreviewGroup>

            </div>

        </div>
    )
}

export default Gallery
