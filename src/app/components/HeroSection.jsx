"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <div className='flex max-md:flex-col flex-row my-4 gap-14 '>
            <div className='col-span-7 place-self-center grid px-5 max-md:text-center space-y-5'>
                <h1 className='text-transparent max-sm:text-2xl text-4xl lg:text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I`m Shakhawat
                    <span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                1000,
                                'Front-end Developer',
                                1000,
                                'React Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.3em', color: 'white' }}
                            repeat={Infinity} />
                    </span>
                </h1>
                <p className='text-[#ADB7BE]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque corrupti quaerat. Quidem, nobis earum.</p>
                <div className='flex max-md:flex-col flex-row gap-5 max-md:mx-auto max-md:w-full'>
                    <button className='px-6 py-3 max-md:w-full rounded-3xl text-white border-none  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transition-transform transform hover:scale-110'>Hire Me</button>
                    <div className='transition-transform transform hover:scale-110'>
                        <button className="w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mx-auto rounded-full bg-[#181818] w-[300px] h-[300px] overflow-clip relative mt-4 lg:mt-0 '>
                <Image
                    src="/images/ratul.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2  left-1/2"
                    width={200}
                    height={200}
                    priority 
                    style={{ width: 'auto', height: '100%' }} 
                />
            </div>
        </div>
    );
};

export default HeroSection;