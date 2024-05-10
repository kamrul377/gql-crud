

export const typeDefs = `#graphql

type Student{ 
    id:ID
    name:String!
    email:String!
    location:String!
    gender:String!
    age:Int!
    status:Boolean
    trash:Boolean
    createdAt:String
    updatedAt:String
}
type User{ 
    id:ID
    name:String!
    email:String!
    password:String!
}




type Mutation{ 

    # create
    createStudent(name:String!,
    email:String!,
    location:String!,
    gender:String!,
    age:Int!) : Student


    # delete
    deleteStudent (id:ID!) : Student

    # update
    updateStudent (id:ID!,
    name:String!,
    email:String!,
    location:String!,
    gender:String!,
    age:Int!) : Student
    
    userRegistration (name:String!, email:String!,password:String!) : User
    userLogin (email:String!,password:String!) : User
    
}

type Query { 
   getAllStudents:[Student]
   getSingleStudent(id:ID!) :Student
}


`