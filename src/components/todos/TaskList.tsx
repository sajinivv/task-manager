import React, { useEffect } from 'react';
import TaskItem from './TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { toggleTodo, updateTodoTitle, setTodos } from '../../reducers/todos/TodoSlice';
import AddTask from './AddTask'
import { URL } from '../../constants/constant';

const TaskList: React.FC = () => {
  const [noDataError, setNoDataError] = React.useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        dispatch(setTodos(data));
      })
      .catch(() => {
        setNoDataError('Failed to fetch tasks');

      });
  }, [dispatch]);

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleUpdateTitle = (id: number, newTitle: string) => {
    dispatch(updateTodoTitle({ id, title: newTitle }));
  };


  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Tasks</h5>

      </div>
      <AddTask />
      <ul className="list-group list-group-flush" role='list-task'>
        {noDataError && tasks.length == 0 && <div className="text-danger text-center">{noDataError}</div>}
        {tasks && tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={{
              id: task.id,
              title: task.title,
              completed: task.completed
            }}
            toggleComplete={handleToggle}
            updateTitle={handleUpdateTitle}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TaskList);
