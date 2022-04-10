import './home.css';
import volume from '../images/volume.svg'
import maria from '../images/maria.png'
import arrowRight from '../images/arrow_right.svg'

function Home() {
  return (
    <div className="home">
      <div className='container'>
        <div className='logo'>
          <img src={volume} alt="volume" />
          <h1 className='unitunes'>uniTunes</h1>
        </div>
        <div className='loginWrapper'>
          <p className='login'>
            Login
          </p>
          <p className='please'>
            Por favor, selecione sua conta     
          </p>
          <div className='user'>
            <img src={maria} className='maria' />
            <p className='welcome'>
              Bem vinda novamente , Maria  
            </p>
          </div>
          <p className='other'>
            Faça login em uma <br />conta diferente
          </p>
          <a className='loginButton' href='/home'>
            Login
            <img src={arrowRight} className='arrowRight' />
          </a>
          <hr className='line' />
          <p className=''>
            Não tem uma conta?
          </p>
          <p className=''>
            Faça login na sua conta
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
