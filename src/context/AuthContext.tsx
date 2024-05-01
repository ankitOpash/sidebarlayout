// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:4001'

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(false)

        // try {
        //   const response = await axios.get(`${baseUrl}/auth/me`, {
        //     headers: {
        //       Authorization: storedToken
        //     }
        //   })

        //   setUser(response.data.user)
        //   setLoading(false)
        // } catch (error) {
        //   // Handle errors such as token expiration
        //   console.error('Error fetching user data:', error)
        //   setUser(null)
        //   setLoading(false)
        // }
      } else {
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/signin`, {
        email: params.email,
        password: params.password
      })

      if (response.data.status === 200) {
        window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.token)
        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL as string)
      } else {
        throw new Error(response.data.message || 'Login failed')
      }
    } catch (error) {
      if (errorCallback) {
        errorCallback(error)
      } else {
        console.error('Login error:', error)
      }
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    setUser(null)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
