import mongoose from "mongoose";

const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "MY_PORTFOLIO"
    }).then(()=>{
        console.log("Connected to database.")
    }).catch((error)=>{
        console.log(`Some Error Occured while Connecting to database: ${error}`);
    });
};

export default dbConnection;