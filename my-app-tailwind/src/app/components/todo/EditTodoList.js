'use client'

import { Button, Modal } from 'flowbite-react';
import { updateTodos } from '@/app/utils/todos';
import { useRouter } from 'next/navigation';

const EditTodoList = ({ openModal, setOpenModal, item }) => {

    const router = useRouter()

    const handleEditTodo =  (formData) => {
        updateTodos(item.id, formData)
        router.refresh()
        setOpenModal(false)
    }

    return (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Edit Todo</Modal.Header>
            <form className="" action={handleEditTodo}>
                <Modal.Body>
                    <div className="space-y-6">
                        <div className="mb-5">
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input defaultValue ={item.title} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" name='title' />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Todo</label>
                            <textarea defaultValue ={item.description} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a word..." name='description'></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit'>Submit</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </form> 
        </Modal>
    )
}
export default EditTodoList