import React from 'react'
import forest from '../Assets/21_World_Forest.png'
import mountains from '../Assets/21_World_Mountains.png'
import town from '../Assets/21_World_Town.png'

const World = props => {
  return (
    <div className='card-animation'>

    <img alt='' src={mountains}
    className='animation-rotate'
    style={{ width: '250%', position: 'relative', left: '-70%', top: '-20%', filter: 'grayscale(100%)' }}
    />

    <img alt='' src={forest}
    className='animation-rotate'
    style={{ width: '150%', position: 'absolute', bottom: '-40%', left: '-20%', filter: 'grayscale(50%)' }}
    />

    <img alt='' src={town}
    className='animation-rotate'
    style={{ width: '100%', position: 'absolute', bottom: '-15%', left: '0%' }}
    />

    </div>
  )
}

export default World
