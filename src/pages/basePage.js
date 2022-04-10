import './basePage.css';
import SideBar from '../component/sideBar';
import PlayBar from '../component/playBar';
import { NavLink } from 'react-router-dom';
import user from '../images/user.svg'

function BasePage({children}) {
  return (
    <div className="basePage">
      <NavLink to="/user" className='basePage__user'>
        <img src={user} />
      </NavLink>
      <div className='basePage__content'>
        <SideBar />
        {children}
      </div>
      <PlayBar />
    </div>
  );
}

export default BasePage;
