import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react'

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailsData = await data.json();
        setDetails(detailsData);
    };

    useEffect(() => {
        fetchDetails();
        // eslint-disable-next-line
    }, [params.name]);



  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab==='instructions'?'active':''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab==='ingredients'?'active':''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' && (
            <div>
                <h2>Summary</h2>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h2>Instructions</h2>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>

        )}
        {activeTab === 'ingredients' && (
            <ul>
            {details.extendedIngredients.map((ingredient) => {
                return (<li key={ingredient.id}>{ingredient.original}</li>)})}
        </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    @media screen and (max-width: 900px){
        flex-direction: column !important;
        margin-top: 5rem;
        gap: 2rem;
        align-items: start;
        
        img{
            width: 100%;
        }

    }

    @media screen and (max-width: 600px){
        img{
            width: 20rem;
        }

    }

    @media screen and (max-width: 400px){
        align-items: center;
    }

    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    img{
        max-width: 25rem;
    }
    h2{
        margin-bottom: 2rem;

    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem
    }
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 600;

    @media screen and (max-width: 900px){
        margin-right: 1rem;
    }
`;

const Info = styled.div `
    margin-left: 3rem;

    h3{
        font-size: 1rem;
        line-height:1.5rem;

    }

    ul li{
        font-weight: 600; 
        font-family: 'Montserrat', sans-serif;
    }

    @media screen and (max-width: 900px){
        margin-left: 0;
    }

`

export default Recipe
