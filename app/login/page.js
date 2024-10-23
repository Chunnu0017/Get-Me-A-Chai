"use client"
import React, { useEffect } from 'react'
import { useSession , signIn , signOut } from "next-auth/react"
import {useRouter} from "next/navigation";

const Login = () => {
  const {data:session} = useSession();
  const router = useRouter()
  
  useEffect(()=>{
    document.title = "Login - Get Me A Chai"
    if(session){
      router.push('/dashboard')
    }
  }, [router,session])
  return (
    <div className='text-white   py-14 container mx-auto'>
        <h1 className='text-center text-3xl font-bold '>Login To Get Your Fans To Support You</h1>
        <div className='social-login-buttons flex justify-center items-center '>
            <button onClick={()=>signIn("github")} className='bg-slate-100 text-black  rounded-full w-96  mt-20 flex justify-center items-center gap-6 h-20 hover:bg-slate-300'>
                <img src="git.png" alt="git" width={50} />
                <span className='font-semibold  text-2xl '>Continue With Github</span>
                </button>

        </div>
    </div>
  )
}

export default Login
