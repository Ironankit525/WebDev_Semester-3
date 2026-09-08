import './Auth.css'

const Signin = ({ onSignup }) => {
  return (
    <section className="auth-card" aria-labelledby="signin-title">
      <p className="auth-eyebrow">WELCOME BACK</p>
      <h1 id="signin-title">Sign in</h1>
      <p className="auth-description">Enter your details to access your account.</p>

      <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
        <div className="auth-field">
          <label htmlFor="signin-email">Email address</label>
          <input id="signin-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
        <div className="auth-field">
          <label htmlFor="signin-password">Password</label>
          <input id="signin-password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required />
        </div>
        <button className="auth-submit" type="submit">Sign in</button>
      </form>

      <p className="auth-switch">
        Don’t have an account?{' '}
        <button type="button" onClick={onSignup}>Sign up</button>
      </p>
    </section>
  )
}

export default Signin
