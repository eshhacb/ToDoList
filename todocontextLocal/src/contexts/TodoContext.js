import {createContext, useContext} from 'react'

//creation of context
export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{} 
    //the functionality defined in app main

})


//custom hook
export const useTodo=()=>{
    return useContext(TodoContext)
}

//provider
export const TodoProvider= TodoContext.Provider