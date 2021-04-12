import React from 'react'

function Navbar(){
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className = "navbar-logo">
                        EMD <i className='fab fa-typo3'/>
                    </Link>
                </div>
            </nav>
        </>
    )
        }