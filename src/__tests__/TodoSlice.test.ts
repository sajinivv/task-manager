import '@testing-library/jest-dom';
import TodoSlice from '../../src/reducers/todos/TodoSlice'

import { toggleTodo, updateTodoTitle, addTodo, deleteTodo } from '../../src/reducers/todos/TodoSlice';

describe('TodoSlice Reducer', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
  });       

    it('should return the initial state', () => {   
        const initialState = TodoSlice(undefined, { type: '' });
        expect(initialState).toEqual([]);
    });

    it('should handle addTodo action', () => {
        const task = 'New Task';
        const action = { type: addTodo.type, payload: task };
        const state = TodoSlice([], action);
        expect(state).toEqual([{ id: expect.any(Number), title: task, completed: false }]);
    }); 

    it('should handle toggleTodo action', () => {
        const initialState = [
            { id: 1, title: 'Task 1', completed: false },       
            { id: 2, title: 'Task 2', completed: true }
        ];
        const action = { type: toggleTodo.type, payload: 1 };
        const state = TodoSlice(initialState, action);
        expect(state).toEqual([         
            { id: 1, title: 'Task 1', completed: true },
            { id: 2, title: 'Task 2', completed: true }
        ]);
    }); 
    it('should handle deleteTodo action', () => {
        const initialState = [
            { id: 1, title: 'Task 1', completed: false },       
            { id: 2, title: 'Task 2', completed: true }
        ];              
        const action = { type: deleteTodo.type, payload: 1 }; 
        const state = TodoSlice(initialState, action);
        expect(state).toEqual([
            { id: 2, title: 'Task 2', completed: true }
        ]);
    }   );

    it('should handle updateTodoTitle action', () => {                                                                              
        const initialState = [
            { id: 1, title: 'Task 1', completed: false },       
            { id: 2, title: 'Task 2', completed: true }     
        ];          
        const action = { type: updateTodoTitle.type, payload: { id: 1, title: 'Updated Task 1' } };   
        const state = TodoSlice(initialState, action);
        expect(state).toEqual([
            { id: 1, title: 'Updated Task 1', completed: false },
            { id: 2, title: 'Task 2', completed: true }
        ]);
    });
});