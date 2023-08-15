import React from 'react'

const DrinkRecipe = ({recipe}) => {
  return (
    <section className='flex justify-center max-[425px]:flex-col mt-[2.5rem] px-5'>
        <div>
    <img className='w-[500px] max-[768px]:w-[900px] rounded-md' src={recipe.strDrinkThumb} alt={recipe.strDrink} />
        </div>
        <div className='px-[3rem] max-[375px]:pr-[5rem] max-[375px]:pl-[1rem]'>
        <h1 className='font-bold text-[2.5rem] text-blue-400'>{recipe.strDrink}</h1>
        <h2 className='border-b-blue-400 border-b-2 w-[70%] pb-2 text-xl my-3'>{recipe.strGlass}</h2>
        <span className=''></span>
        <p className='max-w-[65%] max-[425px]:max-w-[100%] text-slate-300 my-3'>{recipe.strInstructions}</p>
        <ul className='text-slate-300 max-[425px]:mt-[1.5rem] list-disc'>
        <li className='text-xl my-1'>{recipe.strIngredient1}<span className='ml-2 text-base'> {recipe.strMeasure1}</span></li>
        <li className='text-xl my-1'>{recipe.strIngredient2}<span className='ml-2 text-base'> {recipe.strMeasure2}</span></li>
        <li className='text-xl my-1'>{recipe.strIngredient3}<span className='ml-2 text-base'> {recipe.strMeasure3}</span></li>
        <li className='text-xl my-1'>{recipe.strIngredient4}<span className='ml-2 text-base'> {recipe.strMeasure4}</span></li>
        <li className='text-xl my-1'>{recipe.strIngredient5}<span className='ml-2 text-base'> {recipe.strMeasure5}</span></li>
        </ul>
        </div>
    </section>
  )
}

export default DrinkRecipe