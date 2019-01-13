// Stars spin around the lighthouse center
// Lighthouse center glows luminousl (possibly use firefly from moon)

import React from 'react'
import lighthouse from '../Assets/17_Star_Lighthouse.png'
import stars from '../Assets/17_Star_Northstars.png'

const StarAnimation = props => {


  return (
    <div className='card-animation'>

      <img alt='' src={lighthouse}
      className='card-fit-width'
      style={{ filter: 'hue-rotate(90deg)', top: '20%', zIndex: '100' }}
      />

      <img alt='' src={stars}
      className='rotate'
      style={{ height: '150%', position: 'absolute', left: '-50%', top: '-35%' }}
      />

    </div>
  )
}

export default StarAnimation
