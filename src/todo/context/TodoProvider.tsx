import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"
 
const INITIALSTATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '2',
            desc: "Aprender DJango",
            complete: false
        },
        {
            id: '1',
            desc: "Aprender React",
            complete: false
        },
    ],
    complete: 0,
    pending: 2
}

export const TodoProvider = ({children}:TodoProviderProps) => {
    
    const [todoState, dispatch] = useReducer(todoReducer,INITIALSTATE)

    const toggleTodo = (id: string) => dispatch({type: 'toggleTodo', payload:{id}})

    return(
        <TodoContext.Provider 
            value={{ todoState, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    )
}


interface TodoProviderProps {
    children: JSX.Element | JSX.Element[]
}