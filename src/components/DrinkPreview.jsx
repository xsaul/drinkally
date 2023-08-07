import { Link } from "react-router-dom";

const DrinkPreview = ({drink}) => {
  return (
    <Link to={`/recipe/${drink.idDrink}`} className='flex flex-col flex-wrap gap-[1rem] transform transition-transform hover:scale-110 hover:cursor-pointer transition duration-300' key={drink.idDrink}>
    <img className='w-[250px] rounded-md' src={drink.strDrinkThumb} alt={drink.strDrink} />
    <h1 className='font-bold text-[1.35rem] text-blue-400'>{drink.strDrink}</h1><span className="mb-3">{drink.strAlcoholic}</span>
</Link>
  )
}

export default DrinkPreview