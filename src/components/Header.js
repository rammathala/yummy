import React, { useState } from 'react';
import './Header.css';
import { BiSearchAlt } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const [input,setinput] = useState('');
    const navigate = useNavigate();
    const searchinput=(e)=>{
        e.preventDefault();
        setinput('');
        navigate("/Searched/"+ input);
    }
    return (
        <div className='Header'>
            <div >
            <Link className='log' to={"/"}>
            <GiKnifeFork className='logo'/>
            <h5>Yummy</h5>
            </Link>
            </div>
            <form className='Search' onSubmit={searchinput}>
                <BiSearchAlt className='searchfont'/>
                <input type={'text'} value={input} onChange={(e)=>{
                    setinput(e.target.value)
                }} placeholder={"Search your Dish"}></input>
            </form>
        </div>
    );
};

export default Header;