import BasePage from './basePage';
import './list.css';
import contact from '../images/contact_card.svg'

function User() {
  return (
    <BasePage>
      <img src={contact} />
    </BasePage>
  );
}

export default User;
