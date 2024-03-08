import TodoListComponent from "../components/todo/TodoList"
import AddTodoList from "../components/todo/AddTodoList"
import EditTodoList from "../components/todo/EditTodoList"
import { getTodos, addTodos } from "../utils/todos"

const Todo = async () => {
    const data = await getTodos();

    return (
        <div className="mt-10">
            <div className="mb-10 relative">
                <h1 className="text-center text-2xl">Your Todo List</h1>
                <div className="absolute top-0 right-0">
                    <AddTodoList />
                </div>
            </div>

            <div className="grid grid-cols-12 gap-10">
                {
                    data.map((item, i) => {
                    return (
                            <div className="col-span-4">
                                <TodoListComponent item={item} key={i} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo