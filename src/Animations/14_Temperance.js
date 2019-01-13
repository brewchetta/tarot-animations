// Two forks on a river are combining around a rustic scene seen from above
// The two forks are positioned at the top, the bottom is where they've met
// A lot of something is flowing down, changing colors along rainbow lines

import React from 'react'
import river from '../Assets/14_Temperance_River.png'

const Temperance = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={river}
      className='card-fit-height'
      style={{ left: '-50%', backgroundImage: 'linear-gradient(red, purple, blue, green, yellow, orange)' }} />

    </div>
  )
}

export default Temperance
