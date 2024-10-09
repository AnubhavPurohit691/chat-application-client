import useLogout from "../../hooks/useLogout"

const Logout = () => {
  const {logout}=useLogout()
  return (
    <div className='mt-auto py-4'>
        <button className='px-4 py-2 rounded-xl hover:bg-white hover-black hover:border-black hover:border-2 hover:text-black  bg-black text-white curson-pointer' onClick={logout}>Logout</button>
      
    </div>
  )
}

export default Logout
