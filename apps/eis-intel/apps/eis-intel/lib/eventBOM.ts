// apps/eis-intel/lib/eventBOM.ts
// Core event BOM logic: add, get, update, delete events
import { db } from "./firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

export async function getActiveEvents() {
  const col = collection(db, "events");
  const snapshot = await getDocs(col);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function addEvent(event) {
  return await addDoc(collection(db, "events"), event);
}

export async function updateEvent(id, updates) {
  return await updateDoc(doc(db, "events", id), updates);
}

export async function deleteEvent(id) {
  return await deleteDoc(doc(db, "events", id));
}
