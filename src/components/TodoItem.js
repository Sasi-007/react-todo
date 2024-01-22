import React from 'react'

const TodoItem = ({task,deleteTask,toggleCompleted}) => {
    const handleChange = () => {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={task.completed} onChange={handleChange} />
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
    )
}

export default TodoItem
