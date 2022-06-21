import { AddTask } from "./components/AddTask"
import { Title } from "./components/Title"
import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"

// TODO: Falta agregar tareas => agregar o cambior elementos del useContext

export const Todo = () => {
    
    return(
        <TodoProvider>
            <Title />
            <TodoList />
            <AddTask />
        </TodoProvider>
    )
}
