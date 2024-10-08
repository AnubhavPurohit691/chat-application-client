import { Link } from 'react-router-dom';
import GenderCheckbox from '../supportcomponents/GenderCheckbox';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

interface inputtype {
  fullName: string;
  Username: string;
  password: string;
  gender: string;
  email: string;
}

const Signup = () => {
  const [Input, setInput] = useState<inputtype>({
    fullName:"",
    Username:"",
    password:"",
    gender:"",
    email:" "
  });
  
  // Ensure useSignup returns an array
  const {isLoading, signup} = useSignup(); // This assumes useSignup returns an array

  const handlecheckboxchange = (gender: "male" | "female") => {
    setInput({ ...Input, gender });
  };

  function handlesubmitform(e: React.FormEvent) {
    e.preventDefault();
    signup(Input);
  }

  return (
    <div className='flex flex-col items-center justify-center md:min-w-96'>
      <div className='border-2 border-black rounded-lg'>
        <div className='w-full p-6 sm:p-8 rounded-lg'>
          <h1 className="text-center text-3xl font-bold sm:text-4xl">Signup ChatApp</h1>
          <form className="mt-8 flex flex-col gap-4 sm:gap-5" onSubmit={handlesubmitform}>
            <div>
              <label htmlFor="FullName" className="block text-sm font-medium text-gray-700">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter Fullname"
                className="mt-1 w-full rounded-md border-2 border-black px-3 py-2 text-sm "
                value={Input.fullName} onChange={(e) => setInput({ ...Input, fullName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email"
                className="mt-1 w-full rounded-md border-2 border-black px-3 py-2 text-sm "
                value={Input.email} onChange={(e) => setInput({ ...Input, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="mt-1 w-full rounded-md border-2 border-black px-3 py-2 text-sm  "
                value={Input.Username} onChange={(e) => setInput({ ...Input, Username: e.target.value })}
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
                value={Input.password} onChange={(e) => setInput({ ...Input, password: e.target.value })}
              />
            </div>
            <GenderCheckbox selectedGender={Input.gender} onCheckboxgender={handlecheckboxchange} />
            <Link to="/login" className="text-sm  hover:underline">
              Already have an account?
            </Link>
            <button
              type="submit"
              className="w-full rounded-md bg-black py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              {isLoading ? "Loading..." : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
