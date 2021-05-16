import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './Signup.css'

export default function User() {
  const [error] = useState("")
  const { currentUser} = useAuth()

  return (
    <>
      <Card className= 'signup'>
        <div className = 'signupComponent'>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3" >
            Update Profile
          </Link>
        </Card.Body>
        <div className="secondary-btn">
        <Button variant="link" href='/editor'>
          Back
        </Button>
        </div>
        </div>
      </Card>

    </>
  )
}
