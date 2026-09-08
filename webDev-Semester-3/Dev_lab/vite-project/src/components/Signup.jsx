import { useState } from 'react'
import './Auth.css'

const Signup = ({ onSignin }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('http://localhost:3000/signUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          passWord: formData.get('password'),
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to create your account.')
      }

      form.reset()
      setMessage({ type: 'success', text: data.message })
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Unable to reach the sign-up server.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="auth-card" aria-labelledby="signup-title">
      <p className="auth-eyebrow">GET STARTED</p>
      <h1 id="signup-title">Create an account</h1>
      <p className="auth-description">Enter your details to sign up.</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="signup-name">Full name</label>
          <input id="signup-name" name="name" type="text" autoComplete="name" placeholder="Enter your full name" required />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-email">Email address</label>
          <input id="signup-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" name="password" type="password" autoComplete="new-password" placeholder="Create a password" required />
        </div>
        <button className="auth-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating account…' : 'Sign up'}
        </button>
      </form>

      {message && (
        <p className={`auth-message ${message.type}`} role="status">
          {message.text}
        </p>
      )}

      <p className="auth-switch">
        Already have an account?{' '}
        <button type="button" onClick={onSignin}>Sign in</button>
      </p>
    </section>
  )
}

export default Signup
