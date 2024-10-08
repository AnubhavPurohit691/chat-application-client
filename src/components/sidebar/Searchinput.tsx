
const Searchinput = () => {
  return (
    <form className='flex items-center justify-center gap-2 mb-3'>
        <input type="text" placeholder='Search' className=' text-center border-black border-2 rounded-lg' />
        <button type='submit' className=' text-center bg-black text-white px-4 rounded-lg'>Search</button>
    </form>
  )
}

export default Searchinput
