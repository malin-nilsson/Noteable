import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC3xGbicqwpW4SpOV44jIYAnC342-2LCSY',
  authDomain: 'noteable-3a667.firebaseapp.com',
  projectId: 'noteable-3a667',
  storageBucket: 'noteable-3a667.appspot.com',
  messagingSenderId: '695711815244',
  appId: '1:695711815244:web:021fe7875f3dc7cbf286e9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
