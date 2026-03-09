import admin from "firebase-admin"

// interface FirebaseAdminAppParams {
//     projectId: string;
//     clientEmail: string;
//     storageBucket: string;
//     privateKey: string;
// }

// function formatPrivateKey(key: string) {
//     return key.replace(/\\n/g, "\n");
// }

// export function createFirebaseAdminApp(params: FirebaseAdminAppParams) {
//     const privateKey = formatPrivateKey(params.privateKey);

//     if (admin.apps.length > 0) {
//         return admin.app()
//     }

//     const cert = admin.credential.cert({
//         projectId: params.projectId,
//         clientEmail: params.clientEmail,
//         privateKey
//     })

//     // initializing admin
//     return admin.initializeApp({
//         credential: cert,
//         projectId: params.projectId,
//         storageBucket: params.storageBucket
//     })
// }

// export async function initAdmin() {
//     const params = {
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string, 
//         clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
//         storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
//         privateKey: process.env.FIREBASE_PRIVATE_KEY as string
//     }

//     return createFirebaseAdminApp(params);
// }


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID!,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.split(String.raw`\n`).join('\n')
    }),
  });
}

const db = admin.firestore();
export default db;