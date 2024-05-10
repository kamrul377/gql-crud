

import mongoose, { mongo } from "mongoose";

const mongoConnection = async () => {

    try {
        await mongoose.connect(process.env.DB)
        console.log("DATABASE connection success")
    } catch (error) {
        console.log(`connection failed. ${error.message}`)
    }
}

export default mongoConnection