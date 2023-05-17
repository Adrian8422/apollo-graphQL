import { gql } from "apollo-server-express";
import { Task } from "../models/index.js";
const Mutation = {
  createTask: async (_, args) => {
    // console.log(args.task);
    const { title, description } = args.task;
    const newTask = new Task({ title, description });
    if (!newTask) throw new Error("Error when creating a new task");
    console.log(newTask);
    await newTask.save();
    return newTask;
  },
  updateTask: async (_, { id, task }) => {
    // const { title, description } = args.task;
    const updateTask = await Task.findByIdAndUpdate(
      { _id: id },
      {
        $set: task,
      },
      { new: true }
    );
    if (!updateTask) throw new Error("Task not found");
    return updateTask;
  },
  deleteTask: async (_, { id }) => {
    const deleteTask = await Task.findByIdAndDelete({ _id: id });
    if (!deleteTask) throw new Error("Task not found");
    return "Task deleted successfull";
  },
};
export { Mutation };
