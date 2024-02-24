import React from 'react';
import { Link } from 'react-router-dom';
import "./Cusicard.css";
const Cusicard = ({item}) => {
    return (
        <div className='Cusicard'>
            <Link className={'lin'} to={"/Recipe/"+ item.id}>
            <div className='image'>
                <img src={item.image} alt={item.title}/>
            </div>
            <div className='tename'>
                <p>{item.title}</p>
            </div>
            </Link>

        </div>
    );
};

export default Cusicard;