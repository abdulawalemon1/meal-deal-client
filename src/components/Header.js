import React from 'react';
import Logo from '../img/logo.png';

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            <div className='hidden md:flex w-full h-full'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </div>
                <ul className='flex items-center gap-32 ml-auto'>
                    <li className='text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className='flex md:hidden w-full h-full'></div>
        </header>
    );
};

export default Header;