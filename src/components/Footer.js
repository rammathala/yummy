import React from 'react';
import './Footer.css';
import { GiKnifeFork } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='Footer'>
            <Link className='log' to={"/"}>
            <GiKnifeFork className='logo1'/>
            <h5>Yummy</h5>
            </Link>
            <div>
                2023
            </div>
        </div>
    );
};

export default Footer;