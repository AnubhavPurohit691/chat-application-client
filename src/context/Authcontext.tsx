import  { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
type AuthUserType={
    id : string,
    fullName:string,
    email:string,
    profilepic:string,
    gender:string
}

const AuthContext =createContext<{
    authUser:AuthUserType|null;
    setAuthUser:Dispatch<SetStateAction<AuthUserType|null>>;
    isLoading:boolean
}>({
    authUser: null,
    setAuthUser:()=>{},
    isLoading:true
})

export const AuthContextProvider=({children}:{children:ReactNode})=>{
    const[authUser,setAuthUser]=useState<AuthUserType|null>(null)
    const[isLoading,setisLoading]=useState(true)
  
    // logic  
    useEffect(()=>{
        const fetchAuthUser= async ()=>{ 
            try{
                const res = await fetch("/api/auth/me")
                const data= await res.json()
                if(!res.ok){
                    throw new Error(data.error)
                }
                setAuthUser(data)
            }
            
            catch(error){
                    console.log(error)
            }
            finally{
                setisLoading(false)
            }
        }
        fetchAuthUser()
    },[])
    return <AuthContext.Provider value={{
        authUser,isLoading,setAuthUser
    }}>
        {children}
    </AuthContext.Provider>
}


// use hook
export const useAuthContext=()=>{
    return useContext(AuthContext)
}