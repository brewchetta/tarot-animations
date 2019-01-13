import React from 'react'
import raven from '../Assets/5_Hierophant_Raven.png'
import ravenhead from '../Assets/5_Hierophant_Raven_Head.png'
import feather from '../Assets/5_Hierophant_Feather.png'

const Hierophant = props => {
  return (
    <div className='card-animation'>
      <img alt='' src={raven}
      className='card-fit-height'
      style={{ position: 'relative', left: '-50%' }} />

      <img alt='' src={ravenhead}
      className='card-fit-height'
      style={{ position: 'relative', top: '-100%', left: '-50%' }} />

      <img alt='' src={feather} style={{ position: 'absolute', margin: 'inherit', top: '0', width: '30%' }} />
    </div>
  )
}

export default Hierophant
