import { useState } from "react"
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Parent Meeting",
      completed: true,
    },
    {
      id: 2,
      text: "Complete Homework",
      completed: false,
    },
  ]);

  const [text,setText] = useState('');

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      text,
      completed:false,
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const completeToggle = (id) => {
    setTasks(tasks.map(task=> {
      if(task.id === id) {
        return {...task, completed: !task.completed};
      } 
      return task;
    }));
  }
  return (
    <div className="todo-list">
      <div className="list-diff-item">
        <input value={text} onChange={(e) => setText(e.target.value)} className="item-input" />
        <button onClick={() => addTask(text)} className="item-input-btn">Add a Task</button>
      </div>
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeToggle={completeToggle}
        />
      ))}
    </div>
  );
}

export default ToDoList