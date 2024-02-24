import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css'
const Recipe = () => {
    const [details,setDetails] = useState([]);
    const [activetab, setactivetab] = useState('Ingredients');
    const REACT_APP_API_KEY ='7d4319132687484ca1b0edca9e81fc36';
    let params = useParams();
     let id = params.id;
    const fetchDetails = async()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData)
        console.log(detailData)
    };
    useEffect(()=>{
fetchDetails();
    },[params.name])
    return (
        <div className='recipebod'>
    <div className='Recipe'>
        <div className='recipeca'>
        <p>{details.title}</p>
         <img src={details.image} alt={details.title}/>
        </div>
        <div className='buttonsinfo'>
            <div className='buttoninfo'>
            <button title='click to see the Ingredients' className={`buttong ${activetab === `Ingredients`? `activeg`:``}`} onClick={()=>{setactivetab('Ingredients')}}>Ingredients</button>
             <button title='click to see the Instructions' className={`buttong ${activetab === `Instructions`? `activeg`:``}`} onClick={()=>{setactivetab('Instructions')}}>Instructions</button>
            </div> 
            {activetab === 'Ingredients' &&(
                <div className='ingrdet'>
                <p dangerouslySetInnerHTML={{__html:details.summary}}></p>
                <h4 dangerouslySetInnerHTML={{__html:details.instructions}}></h4>
           </div>
            )}
             {activetab === 'Instructions' &&(
                <div>
               <ul>
                {details.extendedIngredients.map((ingre)=>(
                        <li>{ingre.original}</li>
                ))}
               </ul>
           </div>
            )}
        </div>
        </div> 
    </div>
    );
};

export default Recipe;