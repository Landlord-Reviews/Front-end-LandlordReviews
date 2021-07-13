import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Landlord Review</h1>
            <div className = 'links'>
                <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Signup">Sign up</Link>
                <Link to ="/Review">Review</Link>
            </div>
        </nav>
    )
}
