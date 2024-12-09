import react from 'react'
import './landing.css'
import translation from '../../assets/translation.png'
import films from '../../assets/filmes.jpg'

function Landing() {

  return (
    <>
      <div className="landingPage">
        <nav className='navBar'>

          <div className="image">
            <img src="https://www.max.com/img/max-h-w-l.svg" alt="hbo max image" className='hbo' />
          </div>
          <div className="botoes">
            <div className="logar">
              <button className="translate">
                <img src={translation} alt="asdsad" className='transtale' />
                <span className='translateText'>TRADUZIR</span>
              </button>

            </div>
            <button className='translate'>
              <span className='translateText'>ENTRAR</span>
            </button>
            <button className='translateBlue'>
              <span className='translateText'>ASSINE AGORA</span>
            </button>
          </div>
        </nav>

        <div className="hero">
          <div className="pretoEncima">

            <div className="image">

              <img src="https://www.max.com/img/max-h-w-l.svg" alt="hbo max image" className='hbo' />
            </div>

            <div className="text">MUITO MAIS A VER</div>
            <div className="text2">Planos a partir de <strong>R$18,90 / mês</strong></div>

            <button className='translateBlue'>
              <span className='translateText'>ASSINE AGORA</span>
            </button>

          </div>
          <img src={films} alt="" className='films' />
        </div>
      </div>
    </>
  )
}

export default Landing
