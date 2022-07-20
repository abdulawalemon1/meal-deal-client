import React, { useState } from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { motion } from 'framer-motion';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { MdAdd, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const [isMenu, setisMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setisMenu(!isMenu)
        }
    }


    const logout = () => {
        setisMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    }

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    return (
        <header className='bg-primary drop-shadow-lg fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16'>
            {/* Dekstop and Tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                <div className='flex items-center gap-8'>
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-32'>
                        <li className='text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Home</li>
                        <li className='text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Menu</li>
                        <li className='text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>About Us</li>
                        <li className='text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Services</li>
                    </motion.ul>
                    <div className='relative flex flex-center justify-center' onClick={showCart}>
                        <RiShoppingBasketFill className='text-textColor 2xl  cursor-pointer' />
                        {cartItems && cartItems.length > 0 && (
                            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className="text-xs text-white font-semibold">
                                    {cartItems.length}
                                </p>
                            </div>
                        )}

                    </div>
                    <div className='relative'>
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            className="rounded w-10 h-10 min-w-[40px] drop-shadow-xl cursor-pointer"
                            alt=""
                            onClick={login} />
                        {
                            isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}

                                    animate={{ opacity: 1, scale: 1 }}

                                    exit={{ opacity: 0, scale: 0.6 }}

                                    className='w-40 bg-slate-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2'>
                                    {
                                        user && user.uid === "107293306578021978254" && (
                                            <Link to="/createItem">
                                                <p className='px-3 flex items-center gap-3 cursor-pointer hover:bg-primary transition-all duration-100 ease-in-out text-textColor text-base'
                                                    onClick={() => setisMenu(false)}
                                                >New Item<MdAdd></MdAdd></p>

                                            </Link>
                                        )
                                    }

                                    <p onClick={logout} className='px-4 flex items-center gap-3 cursor-pointer  hover:bg-primary transition-all duration-100 ease-in-out text-textColor text-base'>SignOut<MdLogout></MdLogout></p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className='flex items-center justify-between md:hidden w-full h-full'>

                <div className='relative flex flex-center justify-center' onClick={showCart}>

                    <RiShoppingBasketFill className='text-textColor 2xl  cursor-pointer' />
                    <div className='absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>1</p>
                    </div>
                </div>

                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>

                <div className='relative'>
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        className="rounded w-10 h-10 min-w-[40px] drop-shadow-xl cursor-pointer"
                        alt=""
                        onClick={login} />
                    {
                        isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}

                                animate={{ opacity: 1, scale: 1 }}

                                exit={{ opacity: 0, scale: 0.6 }}

                                className='w-40 bg-slate-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2'>
                                {
                                    user && user.uid === "107293306578021978254" && (
                                        <Link to="/createItem">
                                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-primary transition-all duration-100 ease-in-out text-textColor text-base'
                                                onClick={() => setisMenu(false)}
                                            >New Item<MdAdd></MdAdd></p>

                                        </Link>
                                    )
                                }


                                <ul
                                    className='flex flex-col '>
                                    <li className='px-4 py-2 hover:bg-primary text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
                                        onClick={() => setisMenu(false)}
                                    >Home</li>
                                    <li className='px-4 py-2 hover:bg-primary text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
                                        onClick={() => setisMenu(false)}
                                    >Menu</li>
                                    <li className='px-4 py-2 hover:bg-primary text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
                                        onClick={() => setisMenu(false)}
                                    >About Us</li>
                                    <li className='px-4 py-2 hover:bg-primary text-base textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'
                                        onClick={() => setisMenu(false)}
                                    >Services</li>
                                </ul>

                                <p onClick={logout} className=' rounded px-4 py-2 flex items-center justify-center bg-primary gap-3 cursor-pointer  hover:bg-orange-300 transition-all duration-100 ease-in-out text-textColor text-base shadow-md'>SignOut<MdLogout></MdLogout></p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;