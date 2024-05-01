import { ReactNode, ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'src/hooks/useAuth'

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    const accessToken = window.localStorage.getItem('accessToken')
    console.log(accessToken, 'accessToken')

    // Check if there is an accessToken, if yes, user is authenticated
    if (accessToken) {
      return
    }

    // If accessToken is not present, redirect to the desired route
    router.replace('/login') // Update with your login route

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route])

  // If auth is still loading, you may want to show a loading spinner
  if (auth.loading) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

export default GuestGuard
