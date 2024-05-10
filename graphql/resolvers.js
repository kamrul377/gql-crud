import { customers, products } from "../config/db.js"
import Student from "../models/Student.js"
import User from "../models/User.js"
import bcryptjs from 'bcryptjs'


export const resolvers = {
    Query: {
        getAllStudents: async () => {
            return await Student.find()
        },
        getSingleStudent: async (_, { id }) => {
            const data = await Student.findById(id)
            return data
        }
    },


    Mutation: {
        createStudent: async (_, { name, email, age, location, gender }) => {
            const checkMail = await Student.findOne({ email })
            if (checkMail) {
                throw new Error("Email already exits")
            }
            const data = await Student.create({
                name, email, age, location, gender
            })

            return data
        },
        deleteStudent: async (_, { id }) => {
            const data = await Student.findByIdAndDelete(id)
            return data
        },
        updateStudent: async (_, { id, name, age, location, gender, email }) => {
            const data = await Student.findByIdAndUpdate(id, { name, age, location, gender, email }, { new: true })
            return data
        },

        userRegistration: async (_, { name, email, password }) => {

            const hasPass = bcryptjs.hashSync(password, 10)
            const existsEmail = await User.findOne({ email })
            if (existsEmail) {
                throw new Error("Email already Registered")
            }
            if (password.length < 6) {
                throw new Error("Password length must be atlest 6 character.")
            }
            console.log(hasPass)
            const newuser = await User.create({
                name, email, password: hasPass
            })
            return newuser
        }


    },
}