import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../store";

export type TTodo = {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
}

type TInitialState = {
    todos: TTodo[];
}

const initialState: TInitialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState, 
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>)=>{
        state.todos.push({ ...action.payload , isCompleted: false});
        },
        removeTodo: (state, action: PayloadAction<string>) =>{
           state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        toggleCompleted: (state, action: PayloadAction<string>) =>{
            const task = state.todos.find(item => item.id === action.payload);
            if(task)
            {
                task!.isCompleted = !task?.isCompleted;
                state.todos = state.todos.sort((a,b) => Number(a.isCompleted) - Number(b.isCompleted));
            }
        },
       
    }
})


export const {addTodo, removeTodo, toggleCompleted} = todoSlice.actions;

export const todos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;