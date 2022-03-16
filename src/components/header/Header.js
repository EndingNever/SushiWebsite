import React from 'react'
import './Header.css'
import Nav from '../Nav-component/Nav'

export default function Header() {
    return (
        <div className='header-container'>
            <div className="header-welcome">
                <div className="welcome-text">
                    <p id="welcome">Welcome to Kimoto Sake and Sushi</p>
                    <p id='izakaya'>Your Local Izakaya!</p>
                    <div className='header-button'>
                        <button>Click Here To Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
