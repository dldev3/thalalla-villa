import React from 'react'
import { Image } from 'antd';


function Gallery() {
    return (
        <div className='bg-prime-bg-beige' id='gallery'>
            <div className='flex flex-col lg:py-6 lg:px-96 py-12 px-8'>
                <div>
                    <h1 className='lg:text-4xl text-3xl text-prime-green sub-heading'>Must see</h1>
                </div>
                <Image.PreviewGroup>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-16 mt-8">
                        <div className="grid gap-4">
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal1.jpg" alt="gallery-01" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal2.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal3.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal4.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/amen1.jpg" alt="gallery" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal5.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal9.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal6.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal7.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal14.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/amen6.jpg" alt="gallery" />
                            </div>

                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal8.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/amen9.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal10.jpg" alt="gallery" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal11.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal12.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal13.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/gal15.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/amen5.jpg" alt="gallery" />
                            </div>
                            <div>
                                <Image className="img_ h-auto max-w-full rounded-lg" src="/add/amen7.jpg" alt="gallery" />
                            </div>

                        </div>
                    </div>
                </Image.PreviewGroup>

            </div>

        </div>
    )
}

export default Gallery
