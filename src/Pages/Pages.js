import React from 'react';
import Home from './Home';
import {  Routes, Route, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';
const Pages = () => {
  const location= useLocation()
    return (
       <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Cuisine/:type" element={<Cuisine />} />
        <Route path='/Searched/:search' element={<Searched/>}/>
        <Route path='/Recipe/:name' element={<Recipe/>}/>
      </Routes>
      </AnimatePresence>
      
      
    );
};

export default Pages;