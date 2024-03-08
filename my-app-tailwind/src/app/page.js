import { db, auth } from "./utils/firebase";
import { createUserWithEmailAndPassword, getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, connectFirestoreEmulator, addDoc } from "firebase/firestore";

import HomeBanner from "./components/home/Banner";
import AddButton from "./components/AddButton";


export default async function Home() {


  async function addData(formData) {
    'use server'

    const data = {
      name: formData.get('name'),
    }
    await addTodos(data);

    // mutate data
    // revalidate cache
  }
  return (
    <main className="mb-10">
      <HomeBanner />

      <form action={addData}>
        <input type="text" name="name" />
        <AddButton />
      </form>
      {/* <div className="grid grid-cols-12 mt-10">
        <div className="col-span-6 place-self-center">
          <div>
            <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label>
            <input className="modal-state" id="modal-1" type="checkbox" />

            <div className="modal">
              <label className="modal-overlay" htmlFor="modal-1"></label>
              <div className="modal-content flex flex-col gap-5">
                <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <h2 className="text-xl">Modal title 1</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span>
                <div className="flex gap-3">
                  <button className="btn btn-error btn-block">Delete</button>

                  <button className="btn btn-block">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6 place-self-center">
          <div>
            <input type="checkbox" id="drawer-left" className="drawer-toggle" />
            <label htmlFor="drawer-left" className="btn btn-primary">Open Left</label>

            <label className="overlay" htmlFor="drawer-left"></label>
            <div className="drawer">
              <div className="drawer-content pt-10 flex flex-col h-full">
                <label htmlFor="drawer-left" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <div>
                  <h2 className="text-xl font-medium">Create your account</h2>
                  <input className="input py-1.5 my-3" placeholder="Type here..." />
                </div>
                <div className="h-full flex flex-row justify-end items-end gap-2">
                  <label className="btn btn-ghost" htmlFor="drawer-left">Cancel</label>
                  <button className="btn btn-primary">Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
