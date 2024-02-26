import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    isCompeletTodo: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider