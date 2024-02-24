import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';
const Veggie = () => {
    const [veggie, setveggie] = useState([]);
    const REACT_APP_API_KEY ='7d4319132687484ca1b0edca9e81fc36';
    useEffect(()=>{
        getVeggie();
    },[])
    const getVeggie = async () =>{
        const check = localStorage.getItem('veggie');
        if(check){
            setveggie(JSON.parse(check))
        }
        else{
            const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem("veggie",JSON.stringify(data.recipes))
            setveggie(data.recipes);
        }
    }
    return (
        <div>
            <Wrapper>
            <h3>Our Vegetarian picks</h3>
            <Splide options={{
                perPage:4,
                arrows:false,
                drag:"free",
                pagination:false,
                
            }}>
            {veggie.map(recipe =>(
                <SplideSlide>
                <Card>
                <Link to={"/Recipe/"+ recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}/>
                <Gradient/>
                </Link>
                </Card>
                </SplideSlide>
            ))}
            
            </Splide>
            </Wrapper>
            
        </div>
    );
}
const Wrapper = styled.div`
    margin:2rem 0rem;
    h3{
        margin:2rem;
    }
    `;
    
const Card = styled.div`
margin:0rem 2rem;
border-radius:2rem;
overflow:hidden;
img{
    border-radius:2rem;
    position:absolue;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
   display:flex;
   justify-content:center;
   font-size:1rem;
   font-weight:600;
   height:60%; 
   position:absolute;
   bottom:0%;
   text-align:center;
   left:50%;
   transform:translate(-50%,50%);
   color:white;
   z-index:10;
    
}

`;
const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background-color:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;


export default Veggie;