// Chrysalis slowly changes hue, taking a slow lap around the color wheel

import React from 'react'
import chrysalis from '../Assets/12_HangedMan_Chrysalis.png'

const HangedMan = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={chrysalis}
      className='card-fit-height' />

    </div>
  )
}

export default HangedMan
