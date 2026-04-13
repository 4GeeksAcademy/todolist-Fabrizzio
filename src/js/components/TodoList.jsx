import { useState } from "react";

export const TodoList = () => {
  const [tasks, setTasks] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog"
  ]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTasks([input, ...tasks]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="wrapper">
      <h1>todos</h1>

      <div className="todo-container">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addTask}
        />

        <ul>
          {tasks.length === 0 ? (
            <li className="empty">No hay tareas, añadir tareas</li>
          ) : (
            tasks.map((task, index) => (
              <li key={index} className="task">
                {task}
                <span
                  className="delete"
                  onClick={() => deleteTask(index)}
                >
                  ×
                </span>
              </li>
            ))
          )}
        </ul>

        <div className="footer">
          {tasks.length} item left
        </div>
      </div>
    </div>
  );
};