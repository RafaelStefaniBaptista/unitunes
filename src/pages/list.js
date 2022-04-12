import BasePage from './basePage';
import './list.css';
import album from '../images/generic_album.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';

var audio = new Audio('https://download.mp3era.xyz/c/Guns-N-Roses-Welcome-To-The-Jungle.mp3');

function List() {
  const [albuns, setAlbuns] = useState()
  const [isPlaying, setIsPlaying] = useState(false)

  async function getAlbuns() {
    try {
      var response = await axios.get('https://unitunes-unisinos-api.herokuapp.com/homepage-albuns', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
    } catch (e) {
    }

    setAlbuns([
      {
        "title": "By The Way",
        "year": 2002,
        "author": "Red Hot Chili Peppers",
        "genre": "rock",
        "imageUrl": "https://cdn.discordapp.com/attachments/732598338863497357/963540385748099112/download.jpg"
      },
      {
        "title": "System of a Down",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/b/bc/System_of_a_down.jpg",
        "author": "System of a Down",
        "genre": "rock",
        "year": 1998
      },
      {
        "author": "Guns N' Roses",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/0/06/Appetite_for_Destruction.jpg",
        "genre": "rock",
        "title": "Appetite for Destruction",
        "year": 1987
      }
    ])
  }

  function playAudio(title) {
    if (audio.paused || audio.ended) {
      setIsPlaying(true)
      audio.play()
      console.log('played')
    } else {
      console.log('paused')
      setIsPlaying(false)
      audio.pause()
    }
  }

  useEffect(() => {
    getAlbuns()
    audio.onended = () => {
      setIsPlaying(false)
    }
  }, [])

  return (
    <BasePage isPlaying={isPlaying} playAudio={playAudio}>
      <div className='content'>
        <p className='title'>
          Albuns mais ouvidos
        </p>
        <div className='list'>
          {albuns?.map((album) => (
            <div className='card' onClick={() => playAudio()}>
              <img className='image' src={album.imageUrl} />
              <p className='cardText'>
                {album.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BasePage>
  );
}

export default List;
