'use server'
import { db } from "./firebase";
import { collection, doc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const COLLECTION_NAME = 'test'
export async function addTodos(data) {

    try {

        const snapshot = await addDoc(collection(db, COLLECTION_NAME), data)
        console.log(snapshot.id)
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}
export async function getTodos() {

    try {
        const q = await getDocs(collection(db, COLLECTION_NAME));

        return q.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    } catch (e) {
        console.error(e)
        throw new Error('Failed to fetch data')
    }
}

export async function updateTodos(data) {
    const {id, ...restData } = data;
    console.log(data)
    let docRef = doc(db,  COLLECTION_NAME, data.id);

    try {
        const q = await updateDoc(docRef, restData);
        console.log("operation update success: ", id)
    } catch (e) {
        console.error(e)
        throw new Error('Failed to fetch data')
    }
}

export async function getTodo(id) {
    let docRef = doc(db, id);

    try {
        const snapshot = await getDoc(docRef);
        return snapshot.data()
    } catch (e) {
        throw new Error('Failed to fetch data')
    }

}

export async function deleteTodo(id) {
    let docRef = doc(db, id);

    try {
        await deleteDoc(docRef);
        console.log('document successfully deleted: ', id)

    } catch (e) {
        throw new Error('Failed to fetch data')
    }

}