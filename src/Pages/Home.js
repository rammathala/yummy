import { motion } from 'framer-motion';
import React from 'react';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
import './Home.css'
const Home = () => {
    return (
        <div className='Home'>
            <div className='Home1'>
            <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}>
            <Veggie/>
            <Popular/>
            </motion.div>
            
            </div>   
        </div>
    );
};

export default Home;