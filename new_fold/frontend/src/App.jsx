import { useState } from 'react'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

const API_URL = 'http://localhost:5000/api'

function AuthLayout({ title, subtitle, children }) {
  return <main className="auth-shell"><section className="brand-panel"><Link className="brand" to="/signin"><span>✦</span> Nova</Link><div className="brand-copy"><p className="eyebrow">ONE PLACE TO BEGIN</p><h1>Welcome to your next chapter.</h1><p>Keep your account secure and pick up right where you left off.</p></div><p className="brand-footer">Made for focused work</p></section><section className="form-panel"><div className="form-wrap"><header><p className="eyebrow">ACCOUNT ACCESS</p><h2>{title}</h2><p className="subtitle">{subtitle}</p></header>{children}</div></section></main>
}

function Notice({ message, type }) { return message ? <p className={`notice ${type}`}>{message}</p> : null }

function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', passWord: '' })
  const [message, setMessage] = useState(''); const [type, setType] = useState(''); const [loading, setLoading] = useState(false)
  const submit = async (event) => { event.preventDefault(); setLoading(true); setMessage(''); try { const response = await fetch(`${API_URL}/signUp`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) }); const text = await response.text(); if (!response.ok || text.toLowerCase().includes('already')) throw new Error(text); setType('success'); setMessage('Account created. Redirecting you to sign in…'); setTimeout(() => navigate('/signin'), 1000) } catch (error) { setType('error'); setMessage(error.message || 'Could not create your account.') } finally { setLoading(false) } }
  return <AuthLayout title="Create an account" subtitle="Start with a few details, then you’re ready to go."><form onSubmit={submit}><label>Full name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ankit Kumar" /></label><label>Email address<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Password<input required minLength="6" type="password" value={form.passWord} onChange={(e) => setForm({ ...form, passWord: e.target.value })} placeholder="At least 6 characters" /></label><Notice message={message} type={type} /><button disabled={loading}>{loading ? 'Creating account…' : 'Create account'}</button></form><p className="switch-text">Already have an account? <Link to="/signin">Sign in</Link></p></AuthLayout>
}

function SignIn() {
  const [form, setForm] = useState({ email: '', passWord: '' }); const [message, setMessage] = useState(''); const [type, setType] = useState(''); const [loading, setLoading] = useState(false)
  const submit = async (event) => { event.preventDefault(); setLoading(true); setMessage(''); try { const response = await fetch(`${API_URL}/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) }); const data = await response.json(); if (!response.ok) throw new Error(data.message); localStorage.setItem('token', data.token); setType('success'); setMessage('Signed in successfully. Your token has been saved locally.') } catch (error) { setType('error'); setMessage(error.message || 'Unable to sign in.') } finally { setLoading(false) } }
  return <AuthLayout title="Welcome back" subtitle="Sign in to continue to your account."><form onSubmit={submit}><label>Email address<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label className="label-row">Password<Link to="/forgot-password">Forgot password?</Link><input required type="password" value={form.passWord} onChange={(e) => setForm({ ...form, passWord: e.target.value })} placeholder="Your password" /></label><Notice message={message} type={type} /><button disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button></form><p className="switch-text">New here? <Link to="/signup">Create an account</Link></p></AuthLayout>
}

function ForgotPassword() {
  const [email, setEmail] = useState(''); const [message, setMessage] = useState(''); const [type, setType] = useState(''); const [loading, setLoading] = useState(false)
  const submit = async (event) => { event.preventDefault(); setLoading(true); setMessage(''); try { const response = await fetch(`${API_URL}/forgot-password`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }); const text = await response.text(); if (!response.ok) throw new Error(text); setType('success'); setMessage(text) } catch (error) { setType('error'); setMessage(error.message || 'Could not request a password reset.') } finally { setLoading(false) } }
  return <AuthLayout title="Reset your password" subtitle="Enter the email address associated with your account."><form onSubmit={submit}><label>Email address<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label><Notice message={message} type={type} /><button disabled={loading}>{loading ? 'Sending…' : 'Send reset link'}</button></form><p className="switch-text"><Link to="/signin">← Back to sign in</Link></p></AuthLayout>
}

export default function App() { return <Routes><Route path="/signin" element={<SignIn />} /><Route path="/signup" element={<SignUp />} /><Route path="/forgot-password" element={<ForgotPassword />} /><Route path="*" element={<Navigate to="/signin" replace />} /></Routes> }
