import React from 'react'
import { Image } from 'antd';


function Gallery() {
    return (
        <div className='bg-prime-bg-beige'>
            <div className='flex flex-col py-16 px-96'>
                <div>
                    <h1 className='text-6xl text-prime-green sub-heading'>Must see</h1>
                </div>
                <Image.PreviewGroup>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                        <div class="grid gap-4">
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/1.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/2.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/3.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/37.jpg" alt="" />
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/4.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/5.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/6.jpg" alt="" />
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/7.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/8.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/9.jpg" alt="" />
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/19.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/15.jpg" alt="" />
                            </div>
                            <div>
                                <Image class="h-auto max-w-full rounded-lg" src="/img/21.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                </Image.PreviewGroup>

            </div>

        </div>
    )
}

export default Gallery
