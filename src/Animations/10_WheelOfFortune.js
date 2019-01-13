import React from 'react'
import lichen from '../Assets/10_Wheel_Lichen.png'
import zodiac from '../Assets/10_Wheel_Zodiac.png'
import shell from '../Assets/10_Wheel_Shell.png'

const Empress = props => {
  return (
    <div className='card-animation' style={{ textAlign: 'centered' }}>

      <img alt='' src={lichen}
      style={{ position: 'relative', width: '101%' }} />

      <img alt='' src={zodiac}
      style={{ position: 'relative', top: '-65%', left: '20%', width: '60%', zIndex: '1' }} />

      <img alt='' src={shell}
      style={{ position: 'relative', top: '-80%', left: '-25%', width: '30%', zIndex: '2' }} />

    </div>
  )
}

export default Empress
