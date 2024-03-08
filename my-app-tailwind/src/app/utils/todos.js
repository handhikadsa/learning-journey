import { getDoc } from "firebase/firestore";

export async function addTodos(data) {

    try {

        const snapshot = await addDoc(collection(db, 'test'), data)
        console.log(snapshot.id)
    } catch (error) {

        if (error) {
            return console.log(error)
        }
    }
}

async function getTodo(id) {
    let docRef = doc(db, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}