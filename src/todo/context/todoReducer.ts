import { Task, TodoState } from "../interfaces/interfaces";

type TodoAction = 
    | {type: "addTodo", payload: Task}
    | {type: "toggleTodo", payload: {id: string}}

export const todoReducer = (state: TodoState, action: TodoAction ): TodoState =>{

    switch (action.type) {
        case 'addTodo':
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }        
            break;
        case 'toggleTodo':
            return{
                ...state,
                todos: state.todos.map(({...task}) => {
                    if(task.id === action.payload.id)
                        task.complete = !task.complete
                    return task
                })
            }
            break;
        default:
            return{
                ...state
            }        
            break;
    }
}


