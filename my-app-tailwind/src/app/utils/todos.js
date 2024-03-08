'use server'
import { db } from "./firebase";
import { collection, doc, getDocs, getDoc, updateDoc, addDoc } from "firebase/firestore";

const COLLECTION_NAME = 'test'
export async function addTodos(formData) {
    const rawFormData = {
        title: formData.get('title'),
        description: formData.get('description')
    }
    try {
        const snapshot = await addDoc(collection(db, COLLECTION_NAME), rawFormData)
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

export async function updateTodos(id, formData) {
    console.log("data: ", formData)

    const rawFormData = {
        title: formData.get('title'),
        description: formData.get('description')
    }

    let docRef = doc(db,  COLLECTION_NAME, id);

    try {
        const q = await updateDoc(docRef, rawFormData);
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