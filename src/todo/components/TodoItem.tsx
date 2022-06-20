//import { useContext } from "react"
//import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { Task } from "../interfaces/interfaces"


interface TodoItemProps{
    task: Task
}

export const TodoItem = ({task}: TodoItemProps)=>{

    //const {toggleTodo} = useContext(TodoContext)    
    //const handleDbClick = () => {
    //    console.log('hasdleDbClick: ', task.desc)
    //    toggleTodo(task.id)
    //}

    const {toggleTodo} = useTodos()

    return (
        <li
            style={{
                cursor: "pointer",
                textDecoration: task.complete ? 'line-through': ''
            }}
            onDoubleClick={() => toggleTodo(task.id)}>
            {task.desc}
        </li>
    )
}