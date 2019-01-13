// Face slowly fills up like an ink blot. Sparks or rain or something slowly move around it, giving a general idea of outline before it fills

import React from 'react'
import kitty from '../Assets/2_High_Priestess_Cat.png'

const HighPriestess = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={kitty} className='inkblot'
      style={{ height: '100%', position: 'absolute', left: '-25%' }} />

    </div>
  )
}

export default HighPriestess
