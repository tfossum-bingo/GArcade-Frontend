import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom'
import Arcade from './Arcade'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const GameIndex = (props) => {
  // let [gamesDisplayed, setGamesDisplayed] = useState([]);

  const handlePlayGame = (g) => {
    // send id to url parameter space
    // use that id to render the specific game we want to pla
    props.setCurrentGame(g)
    console.log('HERE BE THE PROPS', props)
  }

  // const getGames = () => {
  //   axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
  //   .then(response => {
  //     console.log('RESPONSE HERE => ', response);
  //     setGamesDisplayed(response);
  //   })
  //   .catch(err => console.log('error getting server data \n', err))
  // }

  // let gamesDisplayed = props.gamesDisplayed;

  let mapThemGames = () => {
    return props.currentGame.map((g, idx) => {
      // console.log('THiS A G', g)
      return (
        <div key={idx}
        onClick={() => handlePlayGame(g)}>
        <Link to={`/games/${g._id}`}>
        <h3 className="sub-title">{g.name ? g.name : g.title}</h3>
        </Link>
        <p>{g.gameUrl}</p>
        <p>{g.description !== 'none' ? g.description : 'no description uploaded'}</p>
        </div>
      )
    })
  }

<<<<<<< HEAD
  let decideGames =
    gamesDisplayed.length > 0 ? (
=======
  let decideGames =
    props.currentGame.length > 0 ? (
>>>>>>> 8e909911d70da620ada88c176dcf0deacee48861
      <div>
        <h1 className="pixel-text">Them Games</h1>
        {mapThemGames()}
      </div>
    ) : (
      <h3 className="pixel-text">Loading the Arcade 💨</h3>
    )

  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
    .then(response => {
      console.log('RESPONSE HERE => ', response);
      props.setCurrentGame(response.data);
    })
    .catch(err => console.log('error getting server data \n', err))
  }, [])


  // we need to wait for state to set and, once it does
  // we need to display the state's game information
  // will this be promise based? probably?

  return (

    <div>
      {decideGames}
    </div>
  )
}

export default GameIndex;
