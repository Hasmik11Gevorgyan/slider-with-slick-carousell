import React, { useState } from "react";
import TodoHeader from "./components/todo-header/todoHeader";
import TodoList from "./components/todoList/todoList";
import TodoFooter from "./components/todo-footer/todoFooter";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: false },
  ]);

  const onAdd = (text) => {
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000),
        text: text,
        completed: false,
      },
    ]);
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <TodoHeader onAdd={onAdd} />
      <TodoList tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
      <TodoFooter tasks={tasks} clearCompleted={() => setTasks(tasks.filter((task) => !task.completed))} />
    </div>
  );
}