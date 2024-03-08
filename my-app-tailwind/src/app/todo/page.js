import TodoListComponent from "../components/todo/TodoList"
import AddTodoList from "../components/todo/AddTodoList"
import EditTodoList from "../components/todo/EditTodoList"

const Todo = () => {
    return (
        <div className="mt-10">
            <div className="mb-10 relative">
                <h1 className="text-center text-2xl">Your Todo List</h1>
                <div className="absolute top-0 right-0">
                    <AddTodoList />
                </div>
            </div>
            {/* <div className="flex justify-center gap-5 items-center my-10">
                <h1 className="text-white text-center text-xl">Your Todo List</h1>
                <label className="btn btn-success" htmlFor="addTodo">+ Todo</label>
                <input className="modal-state" id="addTodo" type="checkbox" />
                <AddTodoList />
            </div> */}
            <TodoListComponent />
            <EditTodoList />
        </div>
    )
}

export default Todo