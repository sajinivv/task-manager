import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Todo } from './TodoTypes.ts';

let nextId = 0;

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.unshift({
        id: nextId++, title: action.payload, completed: false
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter(t => t.id !== action.payload);
    },
    updateTodoTitle: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const todo = state.find(t => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
    setTodos: (_, action: PayloadAction<Todo[]>) => {

      nextId = action.payload.length > 0 ? Math.max(...action.payload.map(todo => todo.id)) + 1 : 0;  
      return action.payload.map(todo => ({
        ...todo,
        id: nextId++ // Ensure unique IDs
      }));
    }


  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodoTitle, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
