'use client'

import { Button, Modal } from 'flowbite-react';

const EditTodoList = ({ openModal, setOpenModal  }) => {

    return (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Edit Todo</Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <form className="">
                        <div className="mb-5">
                            <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" />
                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Todo</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a word..."></textarea>
                        </div>
                    </form> 
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit'>I accept</Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                    Decline
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default EditTodoList