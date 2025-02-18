import React from 'react';
import TodoItem from "../todoItem/todoItem";

export default function TodoList({ tasks, onDelete, onToggle }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}