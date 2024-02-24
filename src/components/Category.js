import React from 'react';
import { FaPizzaSlice,FaHamburger } from "react-icons/fa";
import {GiNoodles,GiChopsticks} from "react-icons/gi"
import { NavLink } from 'react-router-dom';
import './Category.css'
const Category = () => {
    return (
        <div className='Category'>
           
            <div>
            <NavLink className="NavLink"to={'/Cuisine/Italian'}>
                <FaPizzaSlice className='logcolor'/>
                <h5>Italian</h5>
            </NavLink>
            </div>
            <div>
            <NavLink  className="NavLink" to={'/Cuisine/American'}>
                <FaHamburger className='logcolor'/>
                <h5>American</h5>
                </NavLink>
            </div>
            <div>
            <NavLink  className="NavLink" to={"/Cuisine/Thai"}>
                <GiNoodles className='logcolor'/>
                <h5>Thai</h5>
                </NavLink>
            </div>
           
            <div>
            <NavLink  className="NavLink" to={"/Cuisine/Japanese"}>
                <GiChopsticks className='logcolor'/>
                <h5>Japanese</h5>
                </NavLink>
            </div>
           
          
        </div>
    );
};

export default Category;