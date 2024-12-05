import react from 'react'
import './landing.css'
import translation from '../../assets/translation.png'

function Landing() {

  return (
    <>
      <div className="landingPage">
        <nav className='navBar'>
        
          <div className="image">
            <img src="https://www.max.com/img/max-h-w-l.svg" alt="hbo max image" className='hbo'/>
          </div>
          <div className="logar">
            <button className="translate">
              <img src={translation} alt="asdsad" className='transtale'/>
              <span className='translateText'>TRADUZIR</span>
            </button>
            <button>
              <span className='translateText'>ENTRAR</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Landing
