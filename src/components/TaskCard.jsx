/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { removeTask } = useContext(TaskContext);

  return (
    <div className="bg-sky-600 rounded-md text-center p-3 m-3 select-none min-w-64">
      <h1 className="p-2 font-light text-lg">{task.title}</h1>
      <p className="text-sky-950 text-sm font-medium">{task.description}</p>
      <button
        className="material-symbols-outlined rounded-xl p-2 hover:bg-red-500 active:bg-red-300 "
        onClick={() => removeTask(task.id)}
      >
        delete
      </button>
    </div>
  );
}

export default TaskCard;
