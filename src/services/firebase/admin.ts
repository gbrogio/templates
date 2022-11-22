import * as admin from 'firebase-admin';
import adminSdk from './admin-sdk.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: adminSdk.client_email,
      privateKey: adminSdk.private_key,
    }),
  });
}

export const database = admin.firestore();
