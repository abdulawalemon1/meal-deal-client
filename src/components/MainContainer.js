import React, { useEffect, useState } from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';

const MainContainer = () => {
    const [{ foodItems }, dispatch] = useStateValue();

    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => { }, [scrollValue, cartShow]);
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <HomeContainer></HomeContainer>

            <section className='w-full my-6'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-2xl font-semibold capitalize relative text-headingColor before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-600  transition-all ease-in-out duration-100'>Our Fresh and Healthy Fruits</p>

                    <div className='hidden md:flex items-center gap-3'>
                        <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-600 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>
                            <MdChevronLeft className='text-lg text-white'></MdChevronLeft>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-600 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>
                            <MdChevronRight className='text-lg text-white'></MdChevronRight>

                        </motion.div>
                    </div>
                </div>
                <RowContainer
                    scrollValue={scrollValue}
                    flag={true}
                    data={foodItems?.filter(n => n.category === 'drinks')}></RowContainer>

            </section>

            {/* <MenuContainer />

{cartShow && <CartContainer />} */}
        </div>
    );
};

export default MainContainer;