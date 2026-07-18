import mongoose from "mongoose";

const connectDb = async()=>{
    try {

                
        await mongoose.connect('mongodb+srv://pratikrajvermalxlx_db_user:mFCaGYviIkHJtzIR@cluster0.qwcluip.mongodb.net/')

        
        console.log('database connected successfully....')


    } catch (error) {
        console.log('failed to connect to database',error)
        process.exit(1)
    }
}

export default connectDb