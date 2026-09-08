import { useEffect, useState } from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin'
import './App.css'

const App = () => {
  const getAuthPath = () => (
    window.location.pathname === '/signin' ? '/signin' : '/signup'
  )
  const [path, setPath] = useState(getAuthPath)

  useEffect(() => {
    if (window.location.pathname !== path) {
      window.history.replaceState({}, '', path)
    }

    const handlePopState = () => setPath(getAuthPath())
    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [path])

  const navigate = (nextPath) => {
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  return (
    <main className="auth-page">
      {path === '/signup' ? (
        <Signup onSignin={() => navigate('/signin')} />
      ) : (
        <Signin onSignup={() => navigate('/signup')} />
      )}
    </main>
  )
}

export default App
