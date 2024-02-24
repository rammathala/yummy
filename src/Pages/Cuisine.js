import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import './Cuisine.css';
import Cusicard from './Cusicard';
const Cuisine = () => {
    const [cuisine,setcuisine] = useState([]);
    let params = useParams();
    const REACT_APP_API_KEY ='7d4319132687484ca1b0edca9e81fc36';
    const getCuisine = async(name) =>{
        const api= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await api.json();
        setcuisine(recipes.results);
    }
    useEffect(()=>{
           getCuisine(params.type)  
    },[params.type])
    return (
        <div className='cusiall'>
               <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}>
        <div className='Cuisinelog'>
     
            {
                cuisine.map(item=>(
                    <Cusicard item={item}/>
                ))
            }
           
        </div>
        </motion.div>
        </div>
    );
};

export default Cuisine;