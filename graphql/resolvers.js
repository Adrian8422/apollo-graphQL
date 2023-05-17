import { Task } from "../models/index.js";
import { Mutation } from "./mutations.js";
import { Query } from "./queries.js";

const resolvers = { Query, Mutation };

export { resolvers };
