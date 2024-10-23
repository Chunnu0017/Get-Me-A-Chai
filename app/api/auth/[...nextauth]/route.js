import GitHubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth/next';
import mongoose from 'mongoose';
import User from '@/app/models/User';
import Payment from '@/app/models/Payment';
import connectDB from '@/app/db/connectDb';

export const authoptions = NextAuth({
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })

    ],
    callbacks: {
        async signIn({user , account , profile ,email , credentials}){
            if(account.provider == "github"){
                await connectDB();
                //check if user is already exists in db
                const currentUser = await User.findOne({email: user.email});
                if(!currentUser){
                    //create new user
                    const newUser = await User.create({
                        email: user.email,
                        username: user.email.split("@")[0],
                        
                    }) 
                }
                return true  
            } 
        },
        async session({ session, user, token}){
            const dbUser = await User.findOne({email: session.user.email})
            session.user.name = dbUser.username 
            return session
        },
    }


})

 export { authoptions as GET , authoptions as POST}