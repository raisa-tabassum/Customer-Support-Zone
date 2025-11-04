// import React, { useState } from 'react';
import Vector1Img from '../../assets/vector1.png'
import Vector2Img from '../../assets/vector2.png'


// const [count,setCount] = useState(0)

const Banner = () => {
    return (
        <div className='flex gap-6 my-20 max-w-[1200px] mx-auto'>
            <div className='relative overflow-hidden p-20 np-20 w-[600px] h-[250px] rounded-lg font-light text-white text-2xl text-center bg-gradient-to-br from-[#632EE3] to-[#9F62F2] '>
                <img src={Vector1Img} className='absolute top-0 left-0 w-full h-full object-contain object-left-top' alt="" />
                <img src={Vector2Img} className='absolute bottom-0 right-0 w-full h-full object-contain object-right-bottom' alt="" />
                <p>In-Progress</p>
                <p className='mt-4 text-6xl font-semibold'>0</p>
            </div>
            <div className='relative overflow-hidden p-20 w-[600px] h-[250px] rounded-lg font-light text-white text-2xl text-center bg-gradient-to-r from-[#54CF68] to-[#00827A] '>
                <img src={Vector1Img} className='absolute top-0 left-0 w-full h-full object-contain object-left-top' alt="" />
                <img src={Vector2Img} className='absolute bottom-0 right-0 w-full h-full object-contain object-right-bottom' alt="" />
                <p>Resolved</p>
                <p className='mt-4 text-6xl font-semibold'>0</p>
            </div>
        </div>
    );
};

export default Banner;