import { TaskProvider } from "./context/TaskContext";
import MainApp from "./MainApp";

export default function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <MainApp />
      </div>
    </TaskProvider>
  );
}
