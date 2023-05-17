import { gql } from "apollo-server-express";
import { Task } from "../models/index.js";

const Query = {
  getAllTasks: async () => {
    const tasks = await Task.find();
    return tasks;
  },
};

export { Query };
