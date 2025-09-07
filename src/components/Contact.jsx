import React from 'react'

const ImageClipBox = ({src, clipClass}) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
)

const Contact = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        clipClass="contact-clip-path-1"
                        src="img/contact-1.webp"
                    />
                    <ImageClipBox
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                        src="img/contact-2.webp"
                    />
                </div>
                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:-right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        clipClass="absolute md:scale-125"
                        src="img/swordman-partial.webp"
                    />
                    <ImageClipBox
                        clipClass="sword-man-clip-path md:scale-125"
                        src="img/swordman.webp"
                    />
                </div>

                <div className="flex flex-col items-center justify-center text-center relative z-10">
                    <p className="font-general text-[10px] uppercase">Join Zentry</p>
                    <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] text-center">
                        Let's <b>build</b> the <br /> new era of <br /> <b>gaming</b> t<b>o</b>gether
                    </p>
                    <button className="mt-10 cursor-pointer bg-gray-200 text-black px-8 py-3 rounded-full uppercase hover:bg-white transition-colors tracking-wider text-sm">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact