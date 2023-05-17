import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/type.js";

import { connect } from "./lib/db.js";
import { resolvers } from "./graphql/resolvers.js";
config();
connect();
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.get("/", (req, res) => res.send("Hello world"));

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use("*", (req, res) => res.status(404).send("Not found"));
  app.listen(port, () => {
    console.log("server on port " + port);
  });
}
start();
