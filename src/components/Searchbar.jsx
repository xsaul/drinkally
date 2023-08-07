function Searchbar({input, handleSubmit, handleInput}) {

  return (
    <>
    <form>
        <input className='w-[25rem] rounded-md px-3 py-2' value={input} onChange={handleInput} type="text" placeholder='Tequila, Whiskey, Vodka...' />
        <button className='ml-5 mt-[1rem] border-blue-400 border-2 rounded-lg px-3 py-1 hover:bg-blue-400' onClick={handleSubmit}>Search</button>
    </form>
    </>
  )
}

export default Searchbar