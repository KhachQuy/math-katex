import React, { useState } from 'react'
import { Navbar, Nav, Button  } from 'react-bootstrap'
import { useAuth } from "../../context/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function NavbarComponent () {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/")
        } catch {
          setError("Failed to log out")
        }
      }
    return (
        <Navbar bg="light" expand ="sm">
            <Navbar.Brand as = {Link} to= "/">
                EzMathDoc
            </Navbar.Brand>
            <Nav>
                <Nav.Link as ={Link} to ="/user">
                    Account
                </Nav.Link>
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                 </Button>
            </Nav>
        </Navbar>
    )
}