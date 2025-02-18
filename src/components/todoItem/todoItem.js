import React from 'react';

export default function TodoItem({ task, onDelete, onToggle }) {
  return (
    <div className="flex mt-5 justify-between items-center bg-gray-100 p-4 my-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mr-4"
      />
      <span>{task.text}</span>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}