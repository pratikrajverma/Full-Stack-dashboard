import mongoose from "mongoose";

const connectDb = async()=>{
    try {

     
        await mongoose.connect('mongodb://fullstackDatabase:pratik1234@ac-uti8jfb-shard-00-00.qwcluip.mongodb.net:27017,ac-uti8jfb-shard-00-01.qwcluip.mongodb.net:27017,ac-uti8jfb-shard-00-02.qwcluip.mongodb.net:27017/?ssl=true&replicaSet=atlas-4cxd0f-shard-0&authSource=admin&appName=Cluster0')

        console.log('database connected successfully....')
 

    } catch (error) {  
        console.log('failed to connect to database',error) 
        process.exit(1)
    } 
}  

export default connectDb