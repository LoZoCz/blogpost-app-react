import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_DB_API_KEY,
    authDomain: import.meta.env.VITE_DB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_DB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_DB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_DB_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_DB_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
