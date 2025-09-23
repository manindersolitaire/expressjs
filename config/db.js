import mongoose from 'mongoose'

export const connectDB = async () => {
    const MONGO_URI = 'mongodb+srv://manindersingh1999:mynameismannu@cluster0.0mdzxec.mongodb.net/express'

    mongoose.connect(MONGO_URI).then(()=>{
        console.log('Database Connected')
    })
}