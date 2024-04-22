import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from "date-fns";

import './App.css';
import { Game, Team } from './shared/interfaces/game.interface';

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const currentDate = format(new Date(), "dd MMMM Y");

  useEffect(() => {
    try {
      axios.get(`https://api-web.nhle.com/v1/score/now`).then((responce) => {
        console.log(responce.data.games)
        setGames(responce.data.games);
      });
    } catch (error: any) {
      throw error;
    }
  }, []);

  const gameRender = (game: Game, isLast: boolean) => {
    return (
      <div key={game.id} className="card" style={{ marginBottom: isLast ? 0 : 20 }}>
        {teamRender(game.awayTeam)}
        <span>-</span>
        {teamRender(game.homeTeam, true)}
      </div>
    )
  }

  const teamRender = (team: Team, reverse?: boolean) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={team.logo} />
          <span>{team.name.default}</span>
        </div>
        <div className="score-container">
          <span className="score">{team.score}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2>Daily scores</h2>
      <h4>{currentDate}</h4>
      <div>
        {games.map((game, index, arr) => gameRender(game, arr.length - 1 === index))}
      </div>
    </>
  )
}

export default App;
