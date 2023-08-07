import { useState, useEffect } from 'react';
import DrinkPreview from '../components/DrinkPreview';

const Home = () => {
  
const [popular, setPopular] = useState([]);
const [input, setInput] = useState("")
const [results, setResults] = useState([])

/* popular */

const url = 'https://the-cocktail-db.p.rapidapi.com/popular.php';
const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': 'a9b58736a1mshd65a7ab4960c09bp1fcebfjsn9f12120c6cdc',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

const fetchData = () => {
fetch(url, options)
.then(response => response.json())
.then(data => {
  setPopular(data.drinks);
}
).catch(error => {
  console.error(error)
})
}

useEffect(() => {
fetchData();
}, [])

/*Search bar */

  const urlInput = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${input}`;
const optionsInput = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': 'a9b58736a1mshd65a7ab4960c09bp1fcebfjsn9f12120c6cdc',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

const fetchDataSearch = () => {
fetch(urlInput, optionsInput)
.then(response => response.json())
.then(data => {
  setResults(data.drinks);
}
).catch(error => {
  console.error(error)
})
}

  function handleInput (e) {
    setInput(e.target.value)
  }

  function handleSubmit (e){
    e.preventDefault();
    fetchDataSearch();
} 


return (
  <>
  <header className='px-[5rem] py-[1.5rem] flex justify-center items-center flex-col'>
    <form>
      <input className='w-[25rem] rounded-md px-3 py-2'  onChange={handleInput} type="text" placeholder='Tequila, Whiskey, Vodka...' />
      <button className='ml-5 mt-[1rem] border-blue-400 border-2 rounded-lg px-3 py-1 hover:bg-blue-400 transition duration-300' onClick={handleSubmit}>Search</button>
  </form>
  </header> 
    <h1 className='border-b-[2px] border-b-blue-400 w-[13rem] text-2xl font-bold pr-[3rem] pb-[0.3rem] ml-[7rem] mb-[3rem]'>{input} drinks</h1>
  <main className='flex flex-row flex-wrap gap-[2rem] px-[7rem] mt-[1rem] mb-[4.5rem]'>
      {
       results.length > 0 ?
       results.slice(0,8).map((result) => (
          <DrinkPreview drink={result} key={result.idDrink} />
       )) 
  :  
        popular.slice(0,8).map((drink) => (
            <DrinkPreview drink={drink} key={drink.idDrink} />
         ))
    
      }
    </main>
  </>
)
    }



export default Home