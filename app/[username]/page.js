import PaymentPage from "@/components/PaymentPage";
import Razorpay from "razorpay";
import React from "react";
import { notFound } from "next/navigation";
import User from "../models/User";
import connectDB from "../db/connectDb";


const Username = async ({ params }) => {
  //if user is not present in databse then show 404 page
  const checkUser = async ()=>{
    await connectDB()
    let u = await User.findOne({username:params.username})
    if(!u){
      return notFound()
    }
  }
  await checkUser()

 
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
}

export default Username;
// for dynamic metadata
export async function generateMetadata ({params}) {
  return{
    title: `${params.username} - Get Me A Chai`
  }
}