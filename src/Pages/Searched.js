import React, { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import './Searched.css'
const Searched = () => {
    const [searched, setsearched] = useState([])
    let searcheditem = useParams();
    const REACT_APP_API_KEY ='7d4319132687484ca1b0edca9e81fc36';
    const getSearchedlist = async(searcheditem)=>{
        const api= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&query=${searcheditem}`);
        const searched = await api.json();
        setsearched(searched.results);
        console.log(searched.results)
    }
    useEffect(()=>{
        getSearchedlist(searcheditem.search) ;
 },[searcheditem.search])
    return (
        <div className='Searched'>
            {
                searched.map((item)=>(
                    <div className='searchedcard'>
                        <Link className='lon' to={"/Recipe/"+item.id}>
                        <img src={item.image} alt={'not found'}/>
                        <p>{item.title}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Searched;