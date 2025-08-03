import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { addTodo } from '../../reducers/todos/TodoSlice';

const AddTask: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [titleErr, setErr] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    setErr('');
    // Validate task input
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    } else {
      setErr('Task cannot be empty');
    }
  };
  
  return (

    <div className="container my-4">
      <div className="d-flex justify-content-center">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAdd}>
            Add Task
          </button>
           <div className="text-danger mt-2" data-testid="error-message">{titleErr}</div>
        </div>
      </div>

    </div>

  );
};

export default React.memo(AddTask);
