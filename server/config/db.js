const mongoose=require("mongoose");

const connectDB=async()=>{
  console.log("connecting to mongoDB");
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connected");
  }
  catch(error){
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
}
module.exports=connectDB;