export default function TodoFooter({ tasks, clearCompleted }) {
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="bg-indigo-700 p-4 text-white flex justify-between">
      <span>{completedTasks} / {tasks.length} completed</span>
      <button
        onClick={clearCompleted}
        disabled={completedTasks === 0} // Disables button if no completed tasks
        className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        Clear all completed
      </button>
    </div>
  );
}