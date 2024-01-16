const ToDoItem = ({task,deleteTask,completeToggle}) => {

  return (
    <div className="todo-item">
      <p className={task.completed ? "complete-task" : ""}>{task.text}</p>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeToggle(task.id)}
      />
      <button onClick={() => deleteTask(task.id)} className="delete-icon">
        X
      </button>
    </div>
  );
}

export default ToDoItem