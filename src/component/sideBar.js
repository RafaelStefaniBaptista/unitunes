import './sideBar.css';
import volume from '../images/volume.svg'
import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sideBar">
      <NavLink to="/" className='uniTunes'>
        <img src={volume} className='volume' />
        uniTunes
      </NavLink>
      <NavLink to="/listagem" className='link'>
        Musicas
      </NavLink>
      <NavLink to="/" className='link'>
        Álbuns
      </NavLink>
      <NavLink to="/" className='link'>
        Contas
      </NavLink>
    </div>
  );
}

export default SideBar;
