import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Home from './components/pages/Home'
import { useAuthContext } from './context/Authcontext'

function App() {
  const {authUser,setAuthUser,isLoading}=useAuthContext()
  if(isLoading){
    return <div>loading...</div>
  }
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser?<Home/>:<Navigate to={"/login"}/>}/>
        <Route path='/login' element={!authUser?<Login/>:<Navigate to={"/"}/>}/>
        <Route path='/signup' element={!authUser?<Signup/>:<Navigate to={"/"} />}/>
      </Routes>
    </div>
  )
}

export default App
