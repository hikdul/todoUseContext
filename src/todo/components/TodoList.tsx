//import { useContext } from "react"
//import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { TodoItem } from "./TodoItem"

export const TodoList = () =>{

    //const {todoState} = useContext(TodoContext)
    //const { todos } = todoState
    //console.info(todos)

    const { todos } = useTodos()

    return(
        <ul>
            {todos.map(td=> <TodoItem key={td.id} task={td} /> )}
        </ul>
    )
}