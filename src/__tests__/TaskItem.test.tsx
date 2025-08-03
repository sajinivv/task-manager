import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import TaskItem from '../../src/components/todos/TaskItem';
import {store} from '../store/store';

const mockTask = {
  id: 1,
  title: 'Test Task',
  completed: false,
};  
// Mock fetch globally for all tests in this file
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  ) as jest.Mock;
});

test('renders TaskItem component with task title', () => {
  render(
    <Provider store={store}>
      <TaskItem task={mockTask} toggleComplete={jest.fn()} updateTitle={jest.fn()} />
    </Provider>
  );        
    expect(screen.getByText(mockTask.title)).toBeInTheDocument();                       
});

test('renders TaskItem component with checkbox', () => {
  render(
    <Provider store={store}>
      <TaskItem task={mockTask} toggleComplete={jest.fn()} updateTitle={jest.fn()} />
    </Provider>
  );            
    expect(screen.getByRole('checkbox-task')).toBeInTheDocument();




});

test('renders TaskItem component with checkbox unchecked', () => {
  render(
    <Provider store={store}>            
        <TaskItem task={mockTask} toggleComplete={jest.fn()} updateTitle={jest.fn()} />

    </Provider> 
    );
    const checkbox = screen.getByRole('checkbox-task'); 
    expect(checkbox).not.toBeChecked();
});

test('checkbox is checked when task is completed', () => {
  const completedTask = { ...mockTask, completed: true };
  render(
    <Provider store={store}>
      <TaskItem task={completedTask} toggleComplete={jest.fn()} updateTitle={jest.fn()} />
    </Provider>
  );
  const checkbox = screen.getByRole('checkbox-task');
  expect(checkbox).toBeChecked();
});     



test('calls toggleComplete when checkbox is clicked', async () => {
  const mockToggleComplete = jest.fn();
  render(       

    <Provider store={store}>
      <TaskItem task={mockTask} toggleComplete={mockToggleComplete} updateTitle={jest.fn()} />
    </Provider>
  );    
    const checkbox = screen.getByRole('checkbox-task');
    checkbox.click();
    expect(mockToggleComplete).toHaveBeenCalledWith(mockTask.id);
});

test('applies strikethrough style when task is completed', () => {              
    const completedTask = { ...mockTask, completed: true };
    render(
      <Provider store={store}>
        <TaskItem task={completedTask} toggleComplete={jest.fn()} updateTitle={jest.fn()} />        
        </Provider>
    );
    const taskTitle = screen.getByText(completedTask.title);
    expect(taskTitle).toHaveClass('text-decoration-line-through');
    expect(taskTitle).toHaveClass('text-muted');
}       
);

test('does not apply strikethrough style when task is not completed', () => {
  render(
    <Provider store={store}>    
        <TaskItem task={mockTask} toggleComplete={jest.fn()} updateTitle={jest.fn()} /> 
    </Provider>
  );
  const taskTitle = screen.getByText(mockTask.title);
  expect(taskTitle).not.toHaveClass('text-decoration-line-through');
  expect(taskTitle).not.toHaveClass('text-muted');
}   
);

  
