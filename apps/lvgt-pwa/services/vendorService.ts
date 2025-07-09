import { db } from '../lib/firebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';

export interface Vendor {
  id?: string;
  name: string;
  contactEmail: string;
  phone: string;
  address: string;
  // Add other vendor properties as needed
}

const vendorsCollectionRef = collection(db, 'vendors');

export const addVendor = async (vendor: Omit<Vendor, 'id'>): Promise<string> => {
  try {
    const docRef = await addDoc(vendorsCollectionRef, vendor);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const getVendors = async (): Promise<Vendor[]> => {
  try {
    const q = query(vendorsCollectionRef, orderBy('name', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Omit<Vendor, 'id'>
    }));
  } catch (e) {
    console.error("Error getting documents: ", e);
    throw e;
  }
};

export const updateVendor = async (id: string, vendor: Partial<Omit<Vendor, 'id'>>): Promise<void> => {
  try {
    const vendorDocRef = doc(db, 'vendors', id);
    await updateDoc(vendorDocRef, vendor);
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
};

export const deleteVendor = async (id: string): Promise<void> => {
  try {
    const vendorDocRef = doc(db, 'vendors', id);
    await deleteDoc(vendorDocRef);
  } catch (e) {
    console.error("Error deleting document: ", e);
    throw e;
  }
};
