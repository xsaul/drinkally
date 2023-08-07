import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Recipe from './pages/Recipe'

function App() {
  return (
    <>
    <Link to="/drinkally/" className='font-bold tracking-wide text-4xl flex justify-center mt-[1.8rem]'>Drink<span className='text-blue-400'>cally</span></Link>
  <Routes>
    <Route path='/drinkally' element={<Home />}/>
    <Route path='/recipe/:id' element={<Recipe />}/>
  </Routes>
    </>
  )
}

export default App
