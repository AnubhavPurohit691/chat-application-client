import  { useState } from 'react'
import { useAuthContext } from '../context/Authcontext'

const useLogout = () => {
    const[Loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext()

    const logout= async ()=>{
        setLoading(true)
        try {
            const res=await fetch("http://localhost:3000/api/auth/logout",{
                method:"POST",
            })
            const data = await res.json()
            if(!res.ok){
                throw new Error (data.error)
            }
            setAuthUser(null)
        } catch (error:any) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }


  return {Loading,logout}
}

export default useLogout
