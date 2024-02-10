/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    setDescription("");
    const element = document.getElementById('title-input');
    element.focus();
  };

  return (
    <div className="text-center">
      <form onSubmit={HandleSubmit}>
        <input
          id="title-input"
          className="m-4 rounded-md active: outline-none p-1 bg-sky-300 placeholder:text-sky-950 placeholder:text-sm placeholder: font-medium"
          value={title}
          placeholder="Titulo de la tarea"
          name="title"
          autoFocus
          required
          autoComplete="off"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
        autoComplete="off"
          className="m-4 rounded-md active: outline-none p-1 bg-sky-300 placeholder:text-sky-950 placeholder:text-sm placeholder: font-medium"
          value={description}
          placeholder="Descripcion de la tarea"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <button className="rounded-md bg-sky-400 p-1 hover:bg-sky-500 active:bg-sky-300 ">
          Crear
        </button>
      </form>
    </div>
  );
}

export default AddTask;
