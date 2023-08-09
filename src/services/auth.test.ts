import { signInWithGoogle, signInWithEmail, firebaseSignOut } from './auth'
import { signInWithPopup, signOut } from 'firebase/auth'

jest.mock('firebase/auth', () => ({
  ...jest.requireActual('firebase/auth'),
  signInWithPopup: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: jest.fn()
}))

describe('Authentication Functions', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should sign in with Google', async () => {
    const mockUser = {
      displayName: 'Test User',
      email: 'test@testing.com',
      photoURL: 'https://test.com/photo.jpg'
    }

    ;(signInWithPopup as jest.Mock).mockResolvedValueOnce({
      user: mockUser
    })

    const result = await signInWithGoogle()
    expect(result).toEqual(mockUser)
  })

  it('should throw error if no user found after Google authentication', async () => {
    ;(signInWithPopup as jest.Mock).mockResolvedValueOnce({})

    await expect(signInWithGoogle()).rejects.toThrow(
      'No user found after authentication.'
    )
  })

  it('should sign in with email and password', async () => {
    const result = await signInWithEmail('monkey', 'banana')
    expect(result).toEqual({
      displayName: 'Monkey',
      email: 'monkey@banana.com',
      photoURL: 'https://placekitten.com/200/300'
    })
  })

  it('should throw error for invalid email or password', async () => {
    await expect(signInWithEmail('test', 'test')).rejects.toThrow(
      'Invalid email or password.'
    )
  })

  it('should sign out', async () => {
    ;(signOut as jest.Mock).mockResolvedValueOnce({})
    await firebaseSignOut()
    expect(signOut).toHaveBeenCalled()
  })
})