import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './Signup.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/editor")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Card className = 'signup'>
        <Link to = "/" className = 'icon'> EzMathDoc </Link>
        <div className= 'signupContainer'>
        <Card.Body>
          <h2 className="title">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="auth-btn" type="submit"
            // style={{
            //   backgroundColor: "rgb(236, 220, 149)"}}
            >
              Log In
            </Button>
          </Form>
          <div className="auth-links">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="auth-links">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Card.Body>
        </div>
      </Card>


    </>
  )
}
