

export interface Task
{
    id: string
    desc: string
    complete: boolean
}

export interface TodoState
{
    todoCount: number
    todos: Task[]
    complete: number
    pending: number
}


