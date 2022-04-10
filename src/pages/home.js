import './home.css';
import volume from '../images/volume.svg'
import balls from '../images/balls.svg'
import maria from '../images/maria.png'
import arrowRight from '../images/arrow_right.svg'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className='home__container'>
        <div className='home__logoWrapper'>
          <div className='home__logo'>
            <img src={volume} className='home__volume' />
            <h1 className='home__unitunes'>uniTunes</h1>
          </div>
          <img src={balls} className="balls" />
        </div>
        <div className='home__loginWrapper'>
          <p className='home__login'>
            Login
          </p>
          <p className='home__please'>
            Por favor, selecione sua conta     
          </p>
          <div className='home__user'>
            <img src={maria} className='home__maria' />
            <p className='home__welcome'>
              Bem vinda novamente, Maria  
            </p>
          </div>
          <p className='home__other'>
            Faça login em uma <br />conta diferente
          </p>
          <NavLink className='home__loginButton' to='/listagem'>
            Login
            <img src={arrowRight} className='home__arrowRight' />
          </NavLink>
          <hr className='home__line' />
          <p className='home__noAccount'>
            Não tem uma conta?
          </p>
          <p className='home__loginAccount'>
            Faça login na sua conta
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
