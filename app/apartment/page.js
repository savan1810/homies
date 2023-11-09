'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { RxDotFilled } from 'react-icons/rx';
import Navbar from '@/components/Navbar'


const Page = () => {
    const slides1 = [
        {
            url: '/1.webp',
        },
        {
            url: '/2.webp',
        },
        {
            url: '/3.webp',
        },
        {
            url: '/4.webp',
        },

    ];
    const slides2 = [
        {
            url: '/2.webp',
        },
        {
            url: '/1.webp',
        },
        {
            url: '/3.webp',
        },
        {
            url: '/4.webp',
        },

    ];
    const slides3 = [
        {
            url: '/3.webp',
        },
        {
            url: '/2.webp',
        },
        {
            url: '/1.webp',
        },
        {
            url: '/4.webp',
        },

    ];
    const slides4 = [
        {
            url: '/4.webp',
        },
        {
            url: '/2.webp',
        },
        {
            url: '/3.webp',
        },
        {
            url: '/1.webp',
        },

    ];
    const slides5 = [
        {
            url: '/4.webp',
        },
        {
            url: '/2.webp',
        },
        {
            url: '/3.webp',
        },
        {
            url: '/1.webp',
        },

    ];
    const slides6 = [
        {
            url: '/4.webp',
        },
        {
            url: '/2.webp',
        },
        {
            url: '/3.webp',
        },
        {
            url: '/1.webp',
        },

    ];
    const slides7 = [
        {
            url: '/4.webp',
        },
        {
            url: '/2.webp',
        },
        {
            url: '/3.webp',
        },
        {
            url: '/1.webp',
        },

    ];
    const slides8 = [
        {
            url: '/4.webp',
        },
        {
            url: '/2.webp',
        },
        {
            url: '/3.webp',
        },
        {
            url: '/1.webp',
        },

    ];

    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentIndex3, setCurrentIndex3] = useState(0);
    const [currentIndex4, setCurrentIndex4] = useState(0);
    const [currentIndex5, setCurrentIndex5] = useState(0);
    const [currentIndex6, setCurrentIndex6] = useState(0);
    const [currentIndex7, setCurrentIndex7] = useState(0);
    const [currentIndex8, setCurrentIndex8] = useState(0);

    const prevSlide1 = (event) => {
        event.preventDefault()
        const isFirstSlide = currentIndex1 === 0;
        const newIndex = isFirstSlide ? slides1.length - 1 : currentIndex1 - 1;
        setCurrentIndex1(newIndex);
    };
    const prevSlide2 = () => {
        event.preventDefault()

        const isFirstSlide = currentIndex2 === 0;
        const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex2 - 1;
        setCurrentIndex2(newIndex);
    }
    const prevSlide3 = (event) => {
        event.preventDefault()
        const isFirstSlide = currentIndex3 === 0;
        const newIndex = isFirstSlide ? slides3.length - 1 : currentIndex3 - 1;
        setCurrentIndex3(newIndex);
    };
    const prevSlide4 = (event) => {
        event.preventDefault()

        const isFirstSlide = currentIndex4 === 0;
        const newIndex = isFirstSlide ? slides4.length - 1 : currentIndex4 - 1;
        setCurrentIndex4(newIndex);
    };
    const prevSlide5 = (event) => {
        event.preventDefault()

        const isFirstSlide = currentIndex5 === 0;
        const newIndex = isFirstSlide ? slides5.length - 1 : currentIndex5 - 1;
        setCurrentIndex5(newIndex);
    };
    const prevSlide6 = (event) => {
        event.preventDefault()

        const isFirstSlide = currentIndex6 === 0;
        const newIndex = isFirstSlide ? slides6.length - 1 : currentIndex6 - 1;
        setCurrentIndex6(newIndex);
    }
    const prevSlide7 = (event) => {
        event.preventDefault()

        const isFirstSlide = currentIndex7 === 0;
        const newIndex = isFirstSlide ? slides7.length - 1 : currentIndex7 - 1;
        setCurrentIndex7(newIndex);
    };
    const prevSlide8 = (event) => {
        event.preventDefault()

        const isFirstSlide = currentIndex8 === 0;
        const newIndex = isFirstSlide ? slides8.length - 1 : currentIndex8 - 1;
        setCurrentIndex8(newIndex);
    };

    const nextSlide1 = (event) => {
        event.preventDefault()

        const isLastSlide = currentIndex1 === slides1.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex1 + 1;
        setCurrentIndex1(newIndex);
    };
    const nextSlide2 = (event) => {
        event.preventDefault()

        const isLastSlide = currentIndex2 === slides2.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
        setCurrentIndex2(newIndex);
    };
    const nextSlide3 = (event) => {
        event.preventDefault()

        const isLastSlide = currentIndex3 === slides3.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex3 + 1;
        setCurrentIndex3(newIndex);
    };

    const nextSlide4 = (event) => {
        event.preventDefault()

        const isLastSlide = currentIndex4 === slides4.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex4 + 1;
        setCurrentIndex4(newIndex);
    };
    const nextSlide5 = (event) => {
        event.preventDefault()

        const isLastSlide = currentIndex5 === slides5.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex5 + 1;
        setCurrentIndex5(newIndex);
    };
    const nextSlide6 = (event) => {
        event.preventDefault()
        const isLastSlide = currentIndex6 === slides6.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex6 + 1;
        setCurrentIndex6(newIndex);
    };
    const nextSlide7 = (event) => {
        event.preventDefault()

        const isLastSlide = currentIndex7 === slides7.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex7 + 1;
        setCurrentIndex7(newIndex);
    };
    const nextSlide8 = (event) => {
        event.preventDefault()

        const isLastSlide = currentIndex8 === slides8.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex8 + 1;
        setCurrentIndex8(newIndex);
    };
    const goToSlide1 = (slideIndex, event) => {
        event.preventDefault()

        setCurrentIndex1(slideIndex);
    };

    const goToSlide2 = (slideIndex, event) => {
        event.preventDefault()

        setCurrentIndex2(slideIndex);
    };

    const goToSlide3 = (slideIndex, event) => {
        event.preventDefault()
        setCurrentIndex3(slideIndex);
    };

    const goToSlide4 = (slideIndex, event) => {
        event.preventDefault()
        setCurrentIndex4(slideIndex);
    };
    const goToSlide5 = (slideIndex, event) => {
        event.preventDefault()
        setCurrentIndex5(slideIndex);
    };
    const goToSlide6 = (slideIndex, event) => {
        event.preventDefault()
        setCurrentIndex6(slideIndex);
    };
    const goToSlide7 = (slideIndex, event) => {
        event.preventDefault()
        setCurrentIndex7(slideIndex);
    };
    const goToSlide8 = (slideIndex, event) => {
        event.preventDefault()
        setCurrentIndex8(slideIndex);
    };



    return (
        <div>
            <Navbar />
            <div className='bg-[#0A0A0A] pb-[30px]'>
                <div className=" w-5/6  mx-auto grid gap-x-6  xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    <div className='relative mt-[30px] mx-auto group px-[20px] py-[20px] bg-[#0A0A0A]' style={{
                        boxShadow: "0px 20px 40px 5px rgb(0, 0, 0, 0.6)", borderRadius: "10px"
                    }}>
                        <div className="relative   mb-2 rounded-[10px] flex" >
                            <Image height={270} width={270} className="rounded-[10px] h-[300px] w-[300px] sm:h-[270px] sm:w-[270px] sm:object-cover sm:aspect-square" src={slides1[currentIndex1].url} alt="" />
                        </div>
                        <div className='hidden group-hover:block absolute top-[30%] left-5  rounded-full py-1 px-2 bg-black/30 text-white  cursor-pointer'>
                            <FontAwesomeIcon onClick={prevSlide1} icon={faAngleLeft} />
                        </div>
                        {/* Right Arrow */}
                        <div className='hidden group-hover:block absolute top-[30%]  right-5  rounded-full py-1 px-2 bg-black/30 text-white  text-blackcursor-pointer'>
                            <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide1} />
                        </div>
                        <div className='flex absolute top-[60%] left-[92px] z-10 justify-center pb-2 '>
                            {slides1.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide1(slideIndex)}
                                    className='text-xl cursor-pointer'
                                >
                                    {currentIndex1 === slideIndex ? <RxDotFilled className='text-white' /> : <RxDotFilled className='text-black/40' />}

                                </div>))}
                        </div>
                        <div className='absolute top-[1%] left-[85%] text-black opacity-60 bg-opacity-50 rounded-2xl  '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="white" className="w-8 h-8  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <h2 className="font-bold text-blue-500">
                            Torino, Piemonte, Italy</h2>
                        <h3 className="text-sm text-gray-500">Noble room into the historical Torino</h3>
                        <h3 className="text-sm text-gray-500">2 Rooms</h3>
                        <div className="mt-1 flex items-center">
                            <span className="font-medium mr-1 text-gray-400">$1000<span> per month</span></span>
                        </div>

                    </div>


                    <div className='relative mt-[30px] mx-auto group px-[20px] py-[20px] bg-[#0A0A0A]' style={{
                        boxShadow: "0px 20px 40px 5px rgb(0, 0, 0, 0.6)", borderRadius: "10px"
                    }}>
                        <div className="relative   mb-2 rounded-2xl flex">
                            <Image height={270} width={270} className="rounded-2xl h-[300px] w-[300px] sm:h-[270px] sm:w-[270px]  sm:object-cover sm:aspect-square" src={slides2[currentIndex2].url} alt="" />
                        </div>

                        <div className='z-10 absolute top-[1%] left-[85%] text-black opacity-60  bg-opacity-50 rounded-2xl '>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="white" className="w-8 h-8  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <div className='hidden group-hover:block absolute top-[30%] left-5  rounded-full py-1 px-2 bg-black/30 text-white  cursor-pointer'>
                            <FontAwesomeIcon onClick={prevSlide2} icon={faAngleLeft} />
                        </div>
                        {/* Right Arrow */}
                        <div className='hidden group-hover:block absolute top-[30%]  right-5  rounded-full py-1 px-2 bg-black/30 text-white  text-blackcursor-pointer'>
                            <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide2} />
                        </div>
                        <div className='flex absolute top-[60%] left-[92px] z-10 justify-center pb-2 '>
                            {slides2.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide2(slideIndex)}
                                    className='text-xl cursor-pointer'
                                >
                                    {currentIndex2 === slideIndex ? <RxDotFilled className='text-white' /> : <RxDotFilled className='text-black/40' />}

                                </div>))}
                        </div>
                        <h2 className="font-bold text-blue-500">

                            Nantes, Pays de la Loire, France</h2>
                        <h3 className="text-sm text-gray-500">Centre place Graslin - room La Cambronne</h3>
                        <h3 className="text-sm text-gray-500">3 Rooms</h3>
                        <div className="mt-1 flex items-center">
                            <span className="font-medium mr-1 text-gray-400">$1000<span> per month</span></span>
                        </div>
                    </div>
                    <div className='relative mt-[30px] mx-auto group px-[20px] py-[20px] bg-[#0A0A0A]' style={{
                        boxShadow: "0px 20px 40px 5px rgb(0, 0, 0, 0.6)", borderRadius: "10px"
                    }}>
                        <div className="relative  mb-2 rounded-2xl flex">
                            <Image height={270} width={270} className="rounded-2xl h-[300px] w-[300px] sm:h-[270px] sm:w-[270px]  sm:object-cover sm:aspect-square" src={slides3[currentIndex3].url} alt="" />
                        </div>
                        <div className='z-10 absolute top-[1%] left-[85%] text-black opacity-60 bg-opacity-50 rounded-2xl '>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="whitesmoke" className="w-8 h-8  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <div className='hidden group-hover:block absolute top-[30%] left-5  rounded-full py-1 px-2 bg-black/30 text-white  cursor-pointer'>
                            <FontAwesomeIcon onClick={prevSlide3} icon={faAngleLeft} />
                        </div>
                        {/* Right Arrow */}
                        <div className='hidden group-hover:block absolute top-[30%]  right-5  rounded-full py-1 px-2 bg-black/30 text-white  text-blackcursor-pointer'>
                            <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide3} />
                        </div>
                        <div className='flex absolute top-[60%] left-[92px] z-10 justify-center pb-2 '>
                            {slides3.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide3(slideIndex)}
                                    className='text-xl cursor-pointer'
                                >
                                    {currentIndex3 === slideIndex ? <RxDotFilled className='text-white' /> : <RxDotFilled className='text-black/40' />}

                                </div>))}
                        </div>
                        <h2 className="font-bold text-blue-500">

                            Seddon, Victoria, Australia</h2>
                        <h3 className="text-sm text-gray-500">Comfy room in modern apartment</h3>
                        <h3 className="text-sm text-gray-500">2 Rooms</h3>
                        <div className="mt-1 flex items-center">
                            <span className="font-medium mr-1 text-gray-400">$1000<span > per month</span></span>
                        </div>
                    </div>
                    <div className='relative mt-[30px] mx-auto group px-[20px] py-[20px] bg-[#0A0A0A]' style={{
                        boxShadow: "0px 20px 40px 5px rgb(0, 0, 0, 0.6)", borderRadius: "10px"
                    }}>
                        <div className="relative   mb-2 rounded-2xl flex">
                            <Image height={270} width={270} className="rounded-2xl h-[300px] w-[300px] sm:h-[270px] sm:w-[270px]  sm:object-cover sm:aspect-square" src={slides4[currentIndex4].url} alt="" />
                        </div>
                        <div className='z-10 absolute top-[1%] left-[85%] text-black opacity-60   bg-opacity-50 rounded-2xl '>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="white" className="w-8 h-8  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <div className='hidden group-hover:block absolute top-[30%] left-5  rounded-full py-1 px-2 bg-black/30 text-white  cursor-pointer'>
                            <FontAwesomeIcon onClick={prevSlide4} icon={faAngleLeft} />
                        </div>
                        {/* Right Arrow */}
                        <div className='hidden group-hover:block absolute top-[30%]  right-5  rounded-full py-1 px-2 bg-black/30 text-white  text-blackcursor-pointer'>
                            <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide4} />
                        </div>
                        <div className='flex absolute top-[60%] left-[92px] z-10 justify-center pb-2 '>
                            {slides4.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide4(slideIndex)}
                                    className='text-xl cursor-pointer'
                                >
                                    {currentIndex4 === slideIndex ? <RxDotFilled className='text-white' /> : <RxDotFilled className='text-black/40' />}

                                </div>))}
                        </div>
                        <h2 className="font-bold text-blue-500">



                            London, England, United Kingdom</h2>
                        <h3 className="text-sm text-gray-500">Light spacious central London apartment</h3>
                        <h3 className="text-sm text-gray-500">2 Rooms</h3>
                        <div className="mt-1 flex items-center">
                            <span className="font-medium mr-1 text-gray-400">$1000<span> per month</span></span>
                        </div>
                    </div>
                    <div className='relative mt-[30px] mx-auto group px-[20px] py-[20px] bg-[#0A0A0A]' style={{
                        boxShadow: "0px 20px 40px 5px rgb(0, 0, 0, 0.6)", borderRadius: "10px"
                    }}>
                        <div className="relative   mb-2 rounded-2xl flex">
                            <Image height={270} width={270} className="rounded-2xl h-[300px] w-[300px] sm:h-[270px] sm:w-[270px] sm:object-cover sm:aspect-square" src={slides5[currentIndex5].url} alt="" />
                        </div>
                        <div className='hidden group-hover:block absolute top-[30%] left-5  rounded-full py-1 px-2 bg-black/30 text-white  cursor-pointer'>
                            <FontAwesomeIcon onClick={prevSlide5} icon={faAngleLeft} />
                        </div>
                        {/* Right Arrow */}
                        <div className='hidden group-hover:block absolute top-[30%]  right-5  rounded-full py-1 px-2 bg-black/30 text-white  text-blackcursor-pointer'>
                            <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide5} />
                        </div>
                        <div className='flex absolute top-[60%] left-[92px] z-10 justify-center pb-2 '>
                            {slides5.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide5(slideIndex)}
                                    className='text-xl cursor-pointer'
                                >
                                    {currentIndex5 === slideIndex ? <RxDotFilled className='text-white' /> : <RxDotFilled className='text-black/40' />}

                                </div>))}
                        </div>
                        <div className='absolute top-[1%] left-[85%] text-black opacity-60 bg-opacity-50 rounded-2xl  '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="white" className="w-8 h-8  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <h2 className="font-bold text-blue-500">
                            Torino, Piemonte, Italy</h2>
                        <h3 className="text-sm text-gray-500">Noble room into the historical Torino</h3>
                        <h3 className="text-sm text-gray-500">2 Rooms</h3>
                        <div className="mt-1 flex items-center">
                            <span className="font-medium mr-1 text-gray-400">$1000<span> per month</span></span>
                        </div>

                    </div>
                    <div className='relative mt-[30px] mx-auto group px-[20px] py-[20px] bg-[#0A0A0A]' style={{
                        boxShadow: "0px 20px 40px 5px rgb(0, 0, 0, 0.6)", borderRadius: "10px"
                    }}>
                        <div className="relative  mb-2 rounded-2xl flex">
                            <Image height={270} width={270} className="rounded-2xl h-[300px] w-[300px] sm:h-[270px] sm:w-[270px] sm:object-cover sm:aspect-square" src={slides6[currentIndex6].url} alt="" />
                        </div>
                        <div className='hidden group-hover:block absolute top-[30%] left-5  rounded-full py-1 px-2 bg-black/30 text-white  cursor-pointer'>
                            <FontAwesomeIcon onClick={prevSlide6} icon={faAngleLeft} />
                        </div>
                        {/* Right Arrow */}
                        <div className='hidden group-hover:block absolute top-[30%]  right-5  rounded-full py-1 px-2 bg-black/30 text-white  text-blackcursor-pointer'>
                            <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide6} />
                        </div>
                        <div className='flex absolute top-[60%] left-[92px] z-10 justify-center pb-2 '>
                            {slides6.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide6(slideIndex)}
                                    className='text-xl cursor-pointer'
                                >
                                    {currentIndex6 === slideIndex ? <RxDotFilled className='text-white' /> : <RxDotFilled className='text-black/40' />}

                                </div>))}
                        </div>
                        <div className='absolute top-[1%] left-[85%] text-black opacity-60 bg-opacity-50 rounded-2xl  '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="white" className="w-8 h-8  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <h2 className="font-bold text-blue-500">
                            Torino, Piemonte, Italy</h2>
                        <h3 className="text-sm text-gray-500">Noble room into the historical Torino</h3>
                        <h3 className="text-sm text-gray-500">2 Rooms</h3>
                        <div className="mt-1 flex items-center">
                            <span className="font-medium mr-1 text-gray-400">$1000<span> per month</span></span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page
