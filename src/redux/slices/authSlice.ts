import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserProfile {
  displayName: string | null
  email: string | null
  photoURL: string | null
}

interface AuthState {
  isAuthenticated: boolean
  userProfile: UserProfile | null
}

const loadState = (): AuthState => {
  try {
    // Try to load the auth state from localStorage
    const savedAuthState = localStorage.getItem('auth')
    if (savedAuthState === null) {
      return {
        isAuthenticated: false,
        userProfile: null
      }
    }
    return JSON.parse(savedAuthState)
  } catch (error) {
    console.error('Failed to load state', error)
    return {
      isAuthenticated: false,
      userProfile: null
    }
  }
}

const initialState: AuthState = loadState()

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserProfile>) => {
      state.isAuthenticated = true
      state.userProfile = action.payload

      try {
        // Save the state to localStorage
        const savedAuthState = JSON.stringify(state)
        localStorage.setItem('auth', savedAuthState)
      } catch (error) {
        console.error('Failed to save state', error)
      }
    },
    logout: state => {
      state.isAuthenticated = false
      state.userProfile = null
      try {
        // Remove the auth state from localStorage
        localStorage.removeItem('auth')
      } catch (error) {
        console.error('Failed to remove state', error)
      }
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer