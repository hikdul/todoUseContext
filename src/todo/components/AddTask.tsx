
export const AddTask = (props: AddTaskProps) => {

    const onClick = () =>{
        var val = document.getElementById('task')
        console.log(val)
    }   

    return(
        <>
            <input id="task" type={'text'} max="25" title="Ingrese Tarea" />
            <button  onClick={onClick} >New Task</button>
        </>
    )
}

interface AddTaskProps{

}


