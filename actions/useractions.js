"use server"

import Razorpay from "razorpay";
import Payment from "@/app/models/Payment";
import User from "@/app/models/User";
import connectDB from "@/app/db/connectDb";

export const initiate  = async(amount, to_username , paymentform) =>{
    await connectDB();
    //fetch the secrer of user who is getting the payment
    let user = await User.findOne({username: to_username})
    const secret = user.razorpaysecret
    var instance = new Razorpay({key_id: user.razorpayid, key_secret: secret})

    
    let options = {
        amount: Number.parseInt(amount),
        currency : "INR"
    }

    let x = await instance.orders.create(options)
    
    //create a payment object which shows a pending payment in the databse
    await Payment.create({oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message})

    return x
}

export const fetchuser = async(username) =>{
    await connectDB()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenObjectIds : true})
    return user
}
export const fecthpayments = async(username) =>{
    await connectDB()
    //find all the payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({to_user: username , done: true}).sort({amount:-1}).limit(5).lean()
    return p
}

export const updateProfile = async(data, oldusername) => {
    await connectDB();
    let ndata = Object.fromEntries(data)  // converts the data into an object

    //if username is being updated, check if username is avialable
    if(oldusername !==  ndata.username){
        let u  = await User.findOne({username: ndata.username})
        if(u){
            return {error: "username already exists"}
        }
        await User.updateOne({email: ndata.email}, ndata)
        //now update all usernames in payment table
        await Payment.updateMany({to_user:oldusername} , {to_user:ndata.username})
    } 
    else{
        await User.updateOne({email: ndata.email}, ndata) // It searches for the user by their email ({ email: ndata.email }) and updates the user's information with ndata.

    }


}