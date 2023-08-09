// src/services/auth.ts
import { auth } from '../firebaseConfig'
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth'

// Facebook
export const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const { user } = result
    if (user) {
        const { displayName, email, photoURL } = user
        return { displayName, email, photoURL }
    }

    throw new Error('No user found after authentication.')
}

// Google
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const { user } = result
    if (user) {
        const { displayName, email, photoURL } = user
        return { displayName, email, photoURL }
    }

    throw new Error('No user found after authentication.')
}

// Hard-coded Local Email
export const signInWithEmail = async (email: string, password: string) => {
    if (email === 'monkey' && password === 'banana') {
        return {
            displayName: 'Monkey',
            email: 'monkey@banana.com',
            photoURL: 'https://placekitten.com/200/300'
        }
    }

    throw new Error('Invalid email or password.')
}

export const firebaseSignOut = () => {
    return signOut(auth)
}