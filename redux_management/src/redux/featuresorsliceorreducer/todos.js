// 1. import the createSlice method or other usefull method
import { createSlice } from "@reduxjs/toolkit";

// 2. define the initial state

const initialState = {
    todos: []
}

// 3 create the slice it is upper version of the reduce

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Date.now(),
                todo: action.payload,
                isComplete: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => (item.id !== action.payload))
        }
    }
})

// export all functionlaity  

export const { addTodo, removeTodo } = todoSlice.actions


// now export the all reducer 

export default todoSlice.reducer