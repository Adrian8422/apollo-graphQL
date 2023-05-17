import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Task {
    id: ID
    title: String
    description: String
  }
  type Query {
    getAllTasks: [Task]
  }
  input TaskInput {
    title: String
    description: String
  }
  type Mutation {
    createTask(task: TaskInput): Task
    updateTask(id: ID!, task: TaskInput): Task
    deleteTask(id: ID!): String
  }
`;

export { typeDefs };
