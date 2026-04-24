import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/E-Commerce-App`);
        console.log("MongoDB Connection Successfully");
    } catch(err){
        console.log("MongoDB connection failed: ", err);
    }
}
export default connectDB;