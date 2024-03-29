import React from 'react';
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import r2 from "../img/r2.png";
import { heroData } from '../utils/data';



const HomeContainer = () => {


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-[calc(100%-80px)]'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='bg-white w-8 h-8 rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />
                    </div>
                </div>

                <p className='text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] md:text-[5rem]'>Your City</span></p>

                <p className='text-base text-textColor text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam illum at optio veniam labore fugit et. Alias cupiditate inventore odit explicabo blanditiis? Non explicabo veniam omnis impedit commodi voluptate!</p>

                <button type='button' className='bg-gradient-to-br from-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 font-semibold'>Order Now!</button>
            </div>
            <div className='py-2 flex-1 flex items-center relative'>

                <img src={HeroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt="" />
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 lg:px-30 gap-4 flex-wrap'>
                    {heroData && heroData.map(n => (
                        <div key={n.id} className=' lg:w-190  p-4  bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-xl'>
                            <img src={n.imgSrc} className='w-20 lg:w-40 -mt-10 lg:-mt-20 ' alt="" />
                            <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>
                            <p className='text-[12px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3'>{n.decp}</p>
                            <p className='text-sm font-semibold text-headingColor'>$<span className='text-xs text-red-700'>{n.price}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;