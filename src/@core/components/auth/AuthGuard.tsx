import { ReactNode, ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'src/hooks/useAuth'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    // Check if there is no accessToken
    if (!window.localStorage.getItem('accessToken')) {
      // Redirect to the login page
      if (router.asPath !== '/') {
        router.replace({
          pathname: '/login',
          query: { returnUrl: router.asPath }
        })
      } else {
        router.replace('/login')
      }
    }
  }, [router.route])

  // If auth is still loading, show the fallback (e.g., a loading spinner)
  if (auth.loading) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard
