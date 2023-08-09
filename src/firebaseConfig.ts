import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAB8PQ1YoW9Oek-VR8hnlVHZqwKBTdPmR8',
  authDomain: 'astronauts-bb748.firebaseapp.com',
  projectId: 'astronauts-bb748',
  storageBucket: 'astronauts-bb748.appspot.com',
  messagingSenderId: '266479018952',
  appId: '1:266479018952:web:06f1b2a7a0bb25204f96fd'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)