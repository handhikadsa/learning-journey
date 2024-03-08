import TodoListComponent from "../components/todo/TodoList"
import AddTodoList from "../components/todo/AddTodoList"
import EditTodoList from "../components/todo/EditTodoList"
import { getTodos } from "../utils/todos"

const Todo = async () => {
    const data = await getTodos();
    return (
        <>
            <div className="flex justify-center gap-5 items-center my-10">
                <h1 className="text-white text-center text-xl">Your Todo List</h1>
                <label className="btn btn-success" htmlFor="addTodo">+ Todo</label>
                <input className="modal-state" id="addTodo" type="checkbox" />
                <AddTodoList />
            </div>
            {
                data.map((item) => {
                    return (
                        // <h1>{item.name}</h1>
                        <TodoListComponent item={item} />
                    )
                })
            }
            
            <EditTodoList />
        </>
    )
}

export default Todo