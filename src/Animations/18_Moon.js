// Moon blinks every once in a while (15-20 sec?)
// about 20 fireflies appear and disappear (set animation delay dynamically so they appear not all at once)

import React from 'react'
import moon from '../Assets/18_Moon_Fullmoon.png'
import firefly from '../Assets/18_Moon_Firefly.png'
import grass from '../Assets/18_Moon_Grass.png'

const Moon = props => {
  return (
    <div className='card-animation'>

    <img alt='' src={moon}
    style={{ position: 'relative', width: '40%', left: '30%' }}
    />

    <img alt='' src={grass}
    className='card-fit-width'
    style={{ position: 'relative', top: '10%' }}
    />

    <img alt='' src={firefly}
    className='animation-firefly'
    style={{ width: '10%', position: 'absolute', bottom: '10%', left: '90%'}}
    />

    </div>
  )
}

export default Moon
