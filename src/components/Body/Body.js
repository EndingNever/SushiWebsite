import React from 'react'
import './Body.css'

export default function Body() {
  return (
    <div className='body-container'>
      <div className="about-container">
        <div className="about-photo-container">
          {/* Photo */}
        </div>
        <div className="about-text-container">
          <h4 className='about-text'>ABOUT KIMOTO SAKE AND SUSHI</h4>
          <h3 className='about-text'>Izakaya style!</h3>
          <p className='about-text'>Kimoto is a full service sushi restaurant, serving traditional sushi, sashimi, fusion rolls and varieties of izakaya style appetizers and small plates along with a variety of craft beer, Japanese whiskey, and sake. </p>
          <p className='about-text'>What is izakaya? Izakaya translates to "stay in sake shop". When found in Japan, these are casual after work drinking spots with shared plate tapas style dishes. Our vision was to blend an izakya and a traditional sushi bar, all with an American pub twist.​</p>
        </div>
      </div>
    </div>
  )
}
