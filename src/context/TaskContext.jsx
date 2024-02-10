/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState("");

  function createTask(task) {
    task.id = [...tasks].length;
    setTasks([...tasks, task]);
  }

  function removeTask(taskId) {
    setTasks([...tasks].filter((task) => taskId != task.id));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return <TaskContext.Provider value={{
    tasks,
    removeTask,
    createTask
  }}>{props.children}</TaskContext.Provider>;
}
