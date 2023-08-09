import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import DrinkRecipe from '../components/DrinkRecipe';

const Recipe = () => {

  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  const url = `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

const fetchData = () => {
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
      setRecipe(data.drinks[0]);
    }
    ).catch(error => {
      console.error(error)
    })
  }
  
  useEffect(() => {
    fetchData();
  }, [id])


  return (
    <>
    <button onClick={() => {
      navigate("/drinkally")
    }} className='ml-[1.2rem] max-[425px]:ml-[10rem] max-[375px]:ml-[8rem] max-[425px]:mt-[2rem] bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2'>Go back home</button>
    <DrinkRecipe recipe={recipe} />
    </>
  )
}

export default Recipe