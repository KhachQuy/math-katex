import React, { useState } from 'react'
import { Navbar, Nav, Button, NavLink } from 'react-bootstrap'
import { useAuth } from "../../context/AuthContext"
import { useHistory,Link } from "react-router-dom"
import './style.css'

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
    const [click, setClick] = useState(false);
    const [button,setButton] =useState(true);

    const handleClick = () => setClick (!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
            
        }else{
            setButton(true)
        }
    };
    window.addEventListener('resize', showButton);

    return (
        <>
    <Navbar bg= "dark" variant = "dark">
        <Link className = "editor-icon" to = "/"> EzMathDoc </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Signed in as: <a href = '/user'> {currentUser.email} </a>
            </Navbar.Text>
        </Navbar.Collapse>
        <Nav className = "mr-auto">
            <NavLink className = "account" href = "/user" variant="outline-info">Account</NavLink> 
            <Button  onClick = {handleLogout}variant="outline-light">Log Out</Button>
        </Nav>

    </Navbar>
        </>
    )
}