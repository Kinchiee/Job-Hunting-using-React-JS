import React from 'react'
import './Developers.css'

function Developers() {
  return (
    <div className='background-color'>
      <div className='developers-div'>
        <div className='card-container allan'>
          <img className='allan-img' src={process.env.PUBLIC_URL + '/Allan.png'} alt='Allan Pic'/>
          <div className='dev-info'>
          <h3>Allan Jay M. Sarino</h3>
          <p>"I know I haven't always done things the right way. I'm just trying to reflect on how to make myself better, how to become a better man, a better father, a better person, a better artist</p>
          <button onClick={() => window.location.href='https://allanjay13.github.io/myportfolioReact/'}>PORTFOLIO</button>
          </div>
        </div>
        <div className='card-container lester'>
          <img className='lester-img' src={process.env.PUBLIC_URL + '/Lester.jpg'} alt='Lester Pic' />
          <div className='dev-info'>
          <h3>Jan Lester E. Cinco</h3>
          <p>"Change is definitely everyday. It's an ever-changing world. Everything changes, so I really don't know. I just hope I become a better person, a better man."</p>
          <button onClick={() => window.location.href='https://lztrcinco.github.io/lztrcinco.portfolio.io/'}>PORTFOLIO</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Developers
