import BasePage from './basePage';
import './list.css';
import album from '../images/generic_album.svg'

function renderCards() {
  var list = []
  for (var i = 0; i < 10; i++) {
    list[i] = (
      <div className='card'>
        <img className='image' src={album} />
        <p className='cardText'>
          Avec Jean-Jacques Goldman, Half Moon Run, The Franklin Electric, GoldFord
        </p>
      </div>
    )
  }

  return list
}

function List() {
  return (
    <BasePage>
      <div className='content'>
        <p className='title'>
          Albuns mais ouvidos
        </p>
        <div className='list'>
          {renderCards()}
        </div>
      </div>
    </BasePage>
  );
}

export default List;
