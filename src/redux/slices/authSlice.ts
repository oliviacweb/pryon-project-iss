import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signInWithGoogle } from '../../services/auth'

interface UserProfile {
    displayName: string | null
    email: string | null
    photoURL: string | null
}

interface AuthState {
    isAuthenticated: boolean
    userProfile: UserProfile | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    userProfile: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true
            state.userProfile = action.payload
        },
        logout: state => {
            state.isAuthenticated = false
            state.userProfile = null
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer