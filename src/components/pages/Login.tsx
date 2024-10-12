import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"

export default function Login() {
  const[input,setinput]=useState({
    email:"",
    password:""
  })
  const {loading,login}=useLogin()
  function handleloginform(e:React.FormEvent){
e.preventDefault()
login(input)
  }
  return (
    <div className='flex min-h-screen items-center justify-center p-4 md:min-w-96'>
      <div className='w-full max-w-md rounded-lg border-2 border-black bg-white shadow-md'>
        <div className='w-full rounded-lg p-6 sm:p-8'>
          <h1 className="text-center text-3xl font-bold sm:text-4xl">Login ChatApp</h1>
          <form className="mt-8 flex flex-col gap-4 sm:gap-5" onSubmit={handleloginform}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter username"
                className="mt-1 w-full rounded-md border-2 border-black px-3 py-2 text-sm  "
                onChange={(e)=>setinput({...input,email:e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="mt-1 w-full rounded-md border-2 border-black px-3 py-2 text-sm "
                onChange={(e)=>setinput({...input,password:e.target.value})}
              />
            </div>
            <Link to="/signup" className="text-sm  hover:underline">
              Don't have an account?
            </Link>
            <button
              type="submit"
              className="w-full rounded-md bg-black py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              {loading?"Loading...":"Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}