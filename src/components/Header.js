import React from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { RiShoppingBasketFill } from 'react-icons/ri';

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* Dekstop and Tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-32'>
                        <li className='text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Home</li>
                        <li className='text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Menu</li>
                        <li className='text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>About Us</li>
                        <li className='text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Services</li>
                    </ul>
                    <div className='relative flex flex-center justify-center'>
                        <RiShoppingBasketFill className='text-textColor 2xl  cursor-pointer' />
                        <div className='absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>1</p>
                        </div>
                    </div>
                    <img src={Avatar} className="w-10 h-10 min-w-[40px] drop-shadow-xl" alt="" />
                </div>
            </div>
            {/* Mobile */}
            <div className='flex md:hidden w-full h-full'></div>
        </header>
    );
};

export default Header;