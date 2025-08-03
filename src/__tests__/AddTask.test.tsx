import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import AddTask from '../../src/components/todos/AddTask'
import { store } from '../store/store';

describe('AddTask Component', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        jest.clearAllMocks();
    });
    it('renders AddTask component', () => {
        render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );
        const inputElement = screen.getByPlaceholderText('Enter a task');
        expect(inputElement).toBeInTheDocument();
    });

    it('adds a task when input is valid', async () => {
        render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );
        const inputElement = screen.getByPlaceholderText('Enter a task');
        const buttonElement = screen.getByRole('button', { name: 'Add Task' });
        const taskText = 'New Task';

        // Simulate user input
        //inputElement.value = taskText;
        fireEvent.change(inputElement, { target: { value: taskText } });
        inputElement.dispatchEvent(new Event('input', { bubbles: true }));
        buttonElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        
    });

    it('shows error message when input is empty', () => {
        render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );
        const buttonElement = screen.getByRole('button', { name: 'Add Task' });
        // Click the button without entering a task
        buttonElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(screen.getByTestId('error-message')).toBeInTheDocument();

    });
    it('clears input after adding a task', async () => {
        render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );
        const inputElement = screen.getByPlaceholderText('Enter a task');
        const buttonElement = screen.getByRole('button', { name: 'Add Task' });
        const taskText = 'Task to be cleared';
        // Simulate user input
        fireEvent.change(inputElement, { target: { value: taskText } });
        inputElement.dispatchEvent(new Event('input', { bubbles: true }));

        await act(async () => {
            fireEvent.click(buttonElement);
        });

        

        const textbox = screen.getByPlaceholderText('Enter a task'); // Adjust selector as needed
      expect(textbox).toHaveValue('');

        // Check if input is cleared
        //expect(inputElement.value).toBe('');
    });
    it('does not add a task when input is invalid', async () => {
        render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );
        const inputElement = screen.getByPlaceholderText('Enter a task');
        const buttonElement = screen.getByRole('button', { name: 'Add Task' });
        // Simulate user input with an empty string
        
        fireEvent.change(inputElement, { target: { value: '' } });
        inputElement.dispatchEvent(new Event('input', { bubbles: true }));
        buttonElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        
        const errorMessage = await screen.findByText('Task cannot be empty');
        expect(errorMessage).toBeInTheDocument();

    });
});
