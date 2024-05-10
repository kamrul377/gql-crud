
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import dotenv from 'dotenv'
import { typeDefs } from './graphql/typeDefs.js'
import { resolvers } from './graphql/resolvers.js'
import mongoConnection from "./config/mongoDb.js";
import { testMiddleware } from "./middlewares/testMiddleware.js";


dotenv.config()

const PORT = process.env.PORT || 5050

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        {
            async requestDidStart(requestContext) {
                await testMiddleware(requestContext)
            },
        }
    ]
})

const serverListen = async () => {
    await startStandaloneServer(server, {
        listen: {
            port: PORT
        }
    })

    console.log(`server running at http://localhost:${process.env.PORT}`)
    mongoConnection()
}

serverListen()