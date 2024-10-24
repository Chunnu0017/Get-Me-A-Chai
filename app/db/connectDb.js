import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(`mongodb://localhost:27017/Chai`,{
            useNewUrlParser:true,

        });
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    }catch(error){
        process.exit(1);
    }
}

export default connectDB;