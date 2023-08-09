import authReducer, { login, logout } from './authSlice'

describe('authSlice', () => {
  // Initial state
  const initialState = {
    isAuthenticated: false,
    userProfile: null
  }

  // Mock user
  const mockUser = {
    displayName: 'Test User',
    email: 'test@testing.com',
    photoURL: 'https://test.com/photo.jpg'
  }

  it('should handle login', () => {
    const action = {
      type: login.type,
      payload: mockUser
    }
    const expectedState = {
      isAuthenticated: true,
      userProfile: mockUser
    }
    expect(authReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle logout', () => {
    const action = {
      type: logout.type
    }
    expect(authReducer(initialState, action)).toEqual(initialState)
  })
})