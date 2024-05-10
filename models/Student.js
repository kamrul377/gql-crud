

import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    age: {
        type: Number,
        require: true,
        trim: true
    },
    location: {
        type: String,
        requred: true,
        trim: true
    },
    gender: {
        type: String,
        requred: true,
        enum: ['male', 'female', 'custom']
    },
    status: {
        type: Boolean,
        default: true
    },
    trash: {
        type: Boolean,
        default: false
    }


}, {
    timestamps: true
})

export default mongoose.model("Student", studentSchema)

// const Student = mongoose.model("Student",studentSchema)
// const User = mongoose.model("User",userSchema)