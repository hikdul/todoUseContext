import { useTodos } from "../hooks/useTodos"


export const Title = () => {
    const { pendingTodos } = useTodos()

    return(
        <h2>
            Todos Pendientes: {pendingTodos}
        </h2>
    )
}