"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile} from "@/actions/useractions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DashBoard() {
  const { data: session, update } = useSession();
  const router = useRouter()
  const [form , setform] = useState({})

  useEffect(()=>{
    getData()

    if (!session) {
     
      router.push("/login");
    }
  },[ router,session])

  const getData = async ()=>{
    let u  = await fetchuser(session.user.name)
    setform(u)
  }

  const handleChange = (e)=>{
    setform({ ...form, [e.target.name]: e.target.value})
  }
  const hadleSubmit = async(e)=>{
    let a = await updateProfile(e, session.user.name)  //calls the updateprofile function
    //alert("Profile Updated!")
    toast("Profile Updated", {
      style: {
        backgroundColor: "#d3d3d3", // Blue background for success
        color: "black", // black text
        textAlign: "center", // Center the text
        fontWeight: "bold", // Make the text bold
      },
    });

  }

  return (
    <>
    <ToastContainer
        position="top-center" // This can be set to "top-center" to center it horizontally
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       
    />
      <div>
        <h1 className="md:text-5xl text-4xl text-center font-bold py-8">
          Welcome To Your DashBoard
        </h1>

        <form className="max-w-sm mx-auto" action={ hadleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              value={form.name?form.name: ""} onChange={handleChange} //form.name?form.name: "" =>if form.name exists then set the input value to form.name else set it to ""
              id = "name"
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              value={form.email?form.email: ""} onChange={handleChange}
              name = "email"
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              UserName
            </label>
            <input value={form.username?form.username: ""} onChange={handleChange}
              name = "username"
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="profilepic"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Profile Picture
            </label>
            <input value={form.profilepic?form.profilepic: ""} onChange={handleChange}
              name = "profilepic"
              type="text"
              id="profilepic"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="coverpic"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Cover Picture
            </label>
            <input value={form.coverpic?form.coverpic: ""} onChange={handleChange}
              name = "coverpic"
              type="text"
              id="coverpic"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="razorpayid"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              RazorPay Id
            </label>
            <input value={form.razorpayid?form.razorpayid: ""} onChange={handleChange}
              name = "razorpayid"
              type="password"
              id="razorpayid"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="razorpaysecret"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              RazorPay Key
            </label>
            <input value={form.razorpaysecret?form.razorpaysecret: ""} onChange={handleChange}
              name = "razorpaysecret"
              type="password"
              id="razorpaysecret"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default DashBoard;
