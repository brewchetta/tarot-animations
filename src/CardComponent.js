import React from 'react'
import Magician from './Animations/1_Magician'
import HighPriestess from './Animations/2_HighPriestess'
// import Empress from './Animations/3_Empress'
import Emperor from './Animations/4_Emperor'
import Hierophant from './Animations/5_Hierophant'
import Lovers from './Animations/6_Lovers'
// import Chariot from './Animations/7_Chariot'
// import Strength from './Animations/8_Strength'
import Hermit from './Animations/9_Hermit'
import WheelOfFortune from './Animations/10_WheelOfFortune'
// import Justice from './Animations/11_Justice'
import HangedMan from './Animations/12_HangedMan'
import Death from './Animations/13_Death'
import Temperance from './Animations/14_Temperance'
import Devil from './Animations/15_Devil'
import Tower from './Animations/16_Tower'
import Star from './Animations/17_Star'
import Moon from './Animations/18_Moon'
// import Sun from './Animations/19_Sun'
// import Judgement from './Animations/20_Judgement'
import World from './Animations/21_World'

export default class CardComponent extends React.Component {

  render() {
    return (
      <>

      <p>Magician</p>
      <div className='card-component'>
        <Magician />
      </div>

      <p>High Priestess</p>
      <div className='card-component'>
        <HighPriestess />
      </div>

      <p>Emperor</p>
      <div className='card-component'>
        <Emperor />
      </div>

      <p>Hierophant</p>
      <div className='card-component'>
        <Hierophant />
      </div>

      <p>Lovers</p>
      <div className='card-component'>
        <Lovers />
      </div>

      <p>Hermit</p>
      <div className='card-component'>
        <Hermit />
      </div>

      <p>Wheel of Fortune</p>
      <div className='card-component'>
        <WheelOfFortune />
      </div>

      <p>Hanged Man</p>
      <div className='card-component'>
        <HangedMan />
      </div>

      <p>Death</p>
      <div className='card-component'>
        <Death />
      </div>

      <p>Temperance</p>
      <div className='card-component'>
        <Temperance />
      </div>

      <p>Devil</p>
      <div className='card-component'>
        <Devil />
      </div>

      <p>Tower</p>
      <div className='card-component'>
        <Tower />
      </div>

      <p>Star</p>
      <div className='card-component'>
        <Star />
      </div>

      <p>Moon</p>
      <div className='card-component'>
        <Moon />
      </div>

      <p>World</p>
      <div className='card-component'>
        <World />
      </div>

      </>
    )
  }
}
