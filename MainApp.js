import { useState, useMemo } from "react";
import { useTasks } from "./context/TaskContext";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import ThemeToggle from "./components/ThemeToggle";
import TaskForm from "./components/TaskForm";

export default function MainApp() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("all");

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter(t => t.completed);
    if (filter === "pending") return tasks.filter(t => !t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <ThemeToggle />
      </div>
      <TaskForm />
      <FilterBar setFilter={setFilter} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}
