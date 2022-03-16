import React from 'react'
import "./Nav.css"

export default function Nav() {
  return (
    <div className='navbar-container'>
        <div className='brand-logo'></div>
        <div className="navigation-items-container">
          <div className='navigation-item'> Home</div>
          <div className='navigation-item'>About</div>
          <div className='navigation-item'>Menu</div>
          <div className='navigation-item'>Delivery</div>
          <div className='navigation-item'>Content</div>
        </div>
    </div>
  )
}
