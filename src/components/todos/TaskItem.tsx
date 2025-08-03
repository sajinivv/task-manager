import React, { useState } from 'react';
import type { Todo } from '../../reducers/todos/TodoTypes';

interface TaskItemProps {
  task: Todo;
  toggleComplete: (id: number) => void;
  updateTitle: (id: number, newTitle: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, updateTitle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleBlur = () => {
    updateTitle(task.id, title);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center" key={task.id}>
      <input
        type="checkbox"
        role='checkbox-task'
        name='task-checkbox'
        className="form-check-input me-2"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          role="textbox"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span
          className={`flex-grow-1 ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}
          onClick={() => setIsEditing(true)}
        >
          {task.title}
        </span>
      )}
    </li>
  );
};

export default React.memo(TaskItem);
