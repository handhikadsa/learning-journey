'use client'
import { Alert } from "flowbite-react";
import React from 'react'

import { useFormStatus } from 'react-dom'
import { db } from "../utils/firebase";
import { createUserWithEmailAndPassword, getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, connectFirestoreEmulator, addDoc, collection } from "firebase/firestore";
import { addTodos } from '../utils/todos';

export default function AddButton() {

    const { pending } = useFormStatus();
    return (
        <button type="submit" aria-disabled={pending}>add data</button>
    )
}
