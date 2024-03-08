'use client'

const EditTodoList = () => {
    return (
        <div className="modal">
            <label className="modal-overlay" htmlFor="editTodo"></label>
            <div className="modal-content flex flex-col gap-5">
                <label htmlFor="editTodo" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <h2 className="text-xl">Edit Todo</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span>
                <div className="flex gap-3">
                    <button className="btn btn-success btn-block">Save</button>

                    <button className="btn btn-block">Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default EditTodoList