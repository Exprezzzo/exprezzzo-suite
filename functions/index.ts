import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

admin.initializeApp();

export const registerVendor = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { name, category } = req.body;
  if (!name || !category) {
    res.status(400).send('Missing required fields');
    return;
  }

  try {
    const docRef = await admin.firestore().collection('vendors').add({
      name,
      category,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).send({ id: docRef.id });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
