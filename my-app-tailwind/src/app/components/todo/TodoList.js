'use client'

import { useState } from "react"
import EditTodoList from "./EditTodoList"

const TodoListComponent = () => {

    const [checked, setChecked] = useState(false)
    const [openEditTodo, setOpenEditTodo] = useState(false)

    const handleComplete = () => {
        setChecked(!checked)
    }

    return (
        <>
            <div className="block max-w-sm p-6 bg-gray-800 transition-colors border rounded-lg shadow relative">
                <div className="absolute top-0 right-0 p-2 cursor-pointer" onClick={() => setOpenEditTodo(true)}>
                    <svg className="w-6 h-6 text-white hover:text-slate-400 transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                </div>
                <h5 className="mb-2 pt-1 text-2xl font-bold tracking-tight text-white-900">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-white-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className="flex items-center gap-5">
                    <div className="flex items-center mt-4 bg-green-700 rounded-md p-2 w-full cursor-pointer">
                        <input  
                            onChange={handleComplete}
                            checked={checked}  
                            id="green-checkbox" type="checkbox" className="rounded-md w-6 h-6 text-green-600 bg-transparen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                            />
                        <label for="green-checkbox" className="ms-2 text-md font-medium white cursor-pointer">{checked ? "Completed" : "Not Complete"}</label>
                    </div>
                    <button type="button" className="text-md font-medium text-white mt-4 p-2 bg-red-700 rounded-lg shadow w-full">
                        <div className="flex items-center">
                            <svg className="me-1 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd"/>
                            </svg>
                            Delete
                        </div>
                    </button>
                </div>
            </div>

            <EditTodoList openModal={openEditTodo} setOpenModal={setOpenEditTodo} />
        </>
    )
}

export default TodoListComponent