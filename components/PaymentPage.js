"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fecthpayments, fetchuser, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

function PaymentPage({username}) {
    //const {data:session} = useSession()

    const [paymentform , setPaymentform] = useState({ name:"", message:"", amount:""});
    const [currentuser , setCurrentuser] = useState({})
    const [payments , setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(()=>{
        getData()
    },[])
    //for popup
    useEffect(()=>{
        if(searchParams.get("paymentdone")== "true"){
            toast("Payment Successful!", {
                style: {
                  backgroundColor: "#d3d3d3", // Blue background for success
                  color: "black", // black text
                  textAlign: "center", // Center the text
                  fontWeight: "bold", // Make the text bold
                },
              });
        }
        router.push(`/${username}`)// navigate to profile page

    },[searchParams])

    const handleChange = (e) =>{
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value})
    }

    const getData = async () =>{
        let u =  await fetchuser(username)
        setCurrentuser(u)
        let dbpayments = await fecthpayments(username)
        setPayments(dbpayments)
        //.log(u,dbpayments)

    }

    const pay = async (amount) =>{
        //get the orderid
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
    
        var options = {
          "key": currentuser.razorpayid,
          "amount":amount,
          "currency":"INR",
          "name": "Get Me A Chai",
          "description": "test transaction",
          "order_id": orderId,
          "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
          "prefill": {
              "name":"CK",
              "email":"ck@gmail.com",
              "contact":"7845125236"
          },
          "notes": {
              "address":"Razor pay corporate office"
          },
          "theme": {
            "color":"#3399cc"
          }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
      }
  return (
    <>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
    <ToastContainer
        position="top-center" // This can be set to "top-center" to center it horizontally
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       
    />

     <div className="cover w-full h-[350px]  relative z-10">
        <img
          className=" absolute object-cover w-full h-full "
        //   src="https://dg.imgix.net/glorifying-god-by-being-compelled-by-god-s-love-iuswi4ap-en/landscape/glorifying-god-by-being-compelled-by-god-s-love-iuswi4ap.jpg?ts=1500408233&ixlib=rails-4.3.1&fit=crop&w=2000&h=1050"
          src={currentuser.coverpic}
          alt="img"
        />
        <div className="absolute -bottom-12 md:left-[46%] left-[33.5%] ">
          <img
            className=" rounded-full border-4 h-[150px]  "
            width={158}
            // src="https://media.licdn.com/dms/image/D4D03AQFhZ9OCC3xpqg/profile-displayphoto-shrink_100_100/0/1691562016028?e=1726099200&v=beta&t=sdLEIZh67xXJk6ekMH5yK1cB6gC__2Vi0O0J9hrYh0w"
            src={currentuser.profilepic}
            alt="img"
          />
        </div>
      </div>
      <div className="info flex justify-center items-center py-16 flex-col gap-2 pb-32">
        <div className="text-lg">@{username}</div>
        <div className="text-slate-500">
          Lets Help {username} to Get A Chai!
        </div>
        <div className="text-slate-500">
        {payments.length} Payments . {currentuser.name} Has raised ₹{payments.reduce((a,b)=> a+b .amount,0)}
        </div>
        <div className="Payment flex md:flex-row flex-col md:gap-2 gap-4 w-[80%]  text-white text-center mt-10 ">
          <div className="supporters bg-slate-500 md:w-1/2 w-full p-2 rounded-lg">
            <h1 className="text-2xl font-bold py-3">Top Supporters</h1>
            <ul>
                {payments.length==0 && <li className='text-3xl font-extrabold text-black'>No Payments Yet!</li>}
               {payments.map((p,i)=>{
                return  <li key={i} className="py-2 text-md flex items-center justify-center md:gap-2 gap-0">
                <img width={35} src="avatar.gif" alt="Avatar" />
                <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a text message {p.message}❤️️"</span>
                </li>
})}

            </ul>
          </div>

          <div className="makepayment bg-slate-500 md:w-1/2 w-full p-2 rounded-lg text-center">
            <h1 className="text-2xl font-bold py-3">Make A Payment</h1>
            <div className="flex flex-col gap-2 p-3 ">
              {/* input for name and msg */}
              <div>
                <input
                  onChange={handleChange} value={paymentform.name}  name="name"
                  className="w-full bg-slate-800 rounded-lg p-3 hover:border-white"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <input
                  onChange={handleChange} value={paymentform.message} name="message"
                  className="w-full bg-slate-800 rounded-lg p-3 hover:border-white"
                  type="text"
                  placeholder="Enter Message"
                />
              </div>
              <input
                onChange={handleChange} value={paymentform.amount} name="amount"
                className="w-full bg-slate-800 rounded-lg p-3 hover:border-white"
                placeholder="Enter Amount"
                type="text"
              />
              <button
              onClick={(()=>pay(Number.parseInt(paymentform.amount)*100))}
                type="button"
                className=" text-white bg-gradient-to-br from-purple-800 to-blue-700 hover:bg-gradient-to-bl p-3 rounded-lg disabled:from-purple-100"
                disabled={paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length<1}
              >
                Pay
              </button>
            </div>
            {/* Or choose from these ammounts */}
            <div className="flex gap-3 justify-center items-center p-3">
              <button className="bg-slate-800 rounded-lg p-3 hover:bg-slate-600 hover:border border-white-200" onClick={()=> pay(1000)}>Pay ₹10</button>
              <button className="bg-slate-800 rounded-lg p-3 hover:bg-slate-600 hover:border border-white-200" onClick={()=> pay(2000)}>Pay ₹20</button>
              <button className="bg-slate-800 rounded-lg p-3 hover:bg-slate-600 hover:border border-white-200" onClick={()=> pay(3000)}>Pay ₹30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage