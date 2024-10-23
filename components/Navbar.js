"use client"
import { useSession , signIn , signOut } from 'next-auth/react'
import React , {useState} from 'react'
import Link from 'next/link'

function Navbar() {
    const [showdropdown , setShowdropdown] = useState(false)
    const {data: session} = useSession()
    // if(session){
    //     return <>
    //     Signed in as {session.user.email} <br/>
    //     <button onClick={()=>signOut()}>sign Out</button>
    //     </>
    // }
  return (
    <nav className='bg-gray-950 text-white flex justify-between px-4 md:h-16 items-center flex-col md:flex-row'>
        <div className='logo font-bold text-lg flex justify-center items-center gap-1'>
            <img className="pb-3" src="tea2.png" alt="Tea" width={40} />
            <Link href={'/'}><span>GetMeAChai !</span></Link>
        </div>
        {/* <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}
        <div className='flex flex-row'>

            {/* If logged in then show DashBoard button and logout button */}
            {session && <>
                <button onClick={()=>setShowdropdown(!showdropdown)}
                type="button"
                className=" flex flex-row gap-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 md:py-2.5 py-0.5  me-2 mb-2">
                Welcome {session.user.email}!
                <img  src="drop-down-menu.png" alt="img" width={22} />
                </button>
                <div onBlur={()=>{setTimeout(()=>{setShowdropdown(false)},100);}}  className={`absolute top-[50px] right-50 h-fit w-1/5 bg-slate-900 text-white rounded-md pt-4 ${showdropdown?"" : "hidden"} z-20`}>
                    <ul className='flex flex-col text-lg font-bold gap-5 py-4 px-10 text-center '>
                        <li className='py-1 hover:text-xl hover:border-b-2 hover:border-t-2' onClick={()=>setShowdropdown(false)}><Link href={"/dashboard"}>DashBoard </Link></li>
                        <li className='py-1 hover:text-xl hover:border-b-2 hover:border-t-2' onClick={()=>setShowdropdown(false)}><Link href={`/${session.user.name}`}>Your Page</Link></li>
                        <li className='py-1 hover:text-xl hover:border-b-2 hover:border-t-2' onClick={()=>setShowdropdown(false)}><Link href={'/'}>Home</Link></li>
                    </ul>
                </div>
            </>}
            {session &&  <Link href={"/"}>
                <button onClick={()=>signOut()}
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                SignOut
                </button>
            </Link>}
            
            {!session &&   <Link href={"/login"}>
                <button 
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Login
                </button>
            </Link>}           
        </div>
    </nav>
  )
}

export default Navbar