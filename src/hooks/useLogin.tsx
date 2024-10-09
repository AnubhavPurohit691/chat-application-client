import { useState } from 'react'
import { useAuthContext } from '../context/Authcontext'

interface inputtype{
    email:string;
    password:string
}

const useLogin = () => {
    const[loading,setloading]=useState(false)
    const{setAuthUser}=useAuthContext()
    const login= async (inputs:inputtype)=>{
        try {
            setloading(true)
            const res = await fetch("http://localhost:3000/api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(inputs)
            })
            const data = await res.json()
            if(!res.ok)throw new Error(data.error)
            setAuthUser(data)
        } catch (error) {
            console.log(error)
        }
        finally{
            setloading(false)
        }  
    }
  return {loading,login}
}

export default useLogin
