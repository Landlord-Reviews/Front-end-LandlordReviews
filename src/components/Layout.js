import React from 'react'
import Navbar from './Navbar'
import "../Styles/global.css"

export default function Layout({children}) {
    return (
        <div className = "layout">
            <Navbar/>
            <div className = 'content'></div>
            {children}
        </div>
    )
}
