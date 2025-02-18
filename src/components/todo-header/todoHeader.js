import { useState } from "react";

export default function TodoHeader({ onAdd }) {
  const [taskText, setTaskText] = useState("");

  const onChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      onAdd(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleAdd} className="bg-indigo-700 mb-5 p-4 rounded-xl text-blue-150">
      <h1 className="text-center">Todo List</h1>
      <div className="flex gap-4 mt-2">
        <input
          onChange={onChange}
          value={taskText}
          type="text"
          placeholder="Enter your task here"
          className="w-full p-2 rounded-xl"
        />
        <button className="bg-white text-indigo-700 px-4 rounded-xl">
          Add Task
        </button>
      </div>
    </form>
  );
}