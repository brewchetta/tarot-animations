import React from 'react'
import baobab from '../Assets/16_Tower_Baobab.png'
import cloud from '../Assets/16_Tower_Cloud.png'

const Tower = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={baobab}
      className='card-fit-height'
      style={{ right: '100%', zIndex: '100' }}
      />

      <img alt='' src={cloud}
      style={{ position: 'absolute', top: '50%', left: '-50%' }}
      />

      <img alt='' src={cloud}
      style={{ position: 'absolute', top: '30%', left: '-30%' }}
      />

      <img alt='' src={cloud}
      style={{ transform: 'rotate(180deg)', position: 'absolute', top: '10%', left: '-25%' }}
      />

      <img alt='' src={cloud}
      style={{ position: 'absolute', top: '-10%', left: '-20%' }}
      />

      <img alt='' src={cloud}
      style={{ transform: 'rotate(180deg)', position: 'absolute', top: '-20%', left: '-30%' }}
      />



    </div>
  )
}

export default Tower
