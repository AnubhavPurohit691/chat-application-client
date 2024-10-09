import  { useState } from 'react'
import { useAuthContext } from '../context/Authcontext'

const useSignup = () => {
    const[isLoading,setisLoading]=useState(false)
    const{setAuthUser}=useAuthContext()
    interface Signupinputs{
        fullName:string,
        Username:string,
        password:string,
        gender:string,
        email:string
      }
    const signup = async (input:Signupinputs)=>{
        try {
            setisLoading(true)
            const res= await fetch("http://localhost:3000/api/auth/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(input)
            })
            const data =await res.json()
            if(!res.ok) throw new Error(data.error)
                setAuthUser(data)
        } catch (error:any) {
            console.error(error.Message)
        }
        finally{
            setisLoading(false)
        }
    }
  return {isLoading,signup}
}
export default useSignup
