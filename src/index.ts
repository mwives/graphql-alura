import { ApolloServer } from "apollo-server";

import userSchema from "./api/user/schema/user.graphql";
import userResolvers from "./api/user/resolvers/userResolver";

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server running on ${url}`));
