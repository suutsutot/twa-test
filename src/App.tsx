import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from "date-fns";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './App.css';
import { Game, Team } from './shared/interfaces/game.interface';

const http = axios.create({
  baseURL: process.env.API_URL || 'https://nhl-bot-be.onrender.com',
  headers: {
      "Content-type": "application/json"
  }
});

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (date: Date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    try {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      http.get(`/api/games/${formattedDate}`).then((responce) => {
        console.log(responce.data.games)
        setGames(responce.data.games);
      });
    } catch (error: any) {
      throw error;
    }
  }, [selectedDate]);

  const gameRender = (game: Game, isLast: boolean) => {
    return (
      <div key={game.id} className="card" style={{ marginBottom: isLast ? 0 : 20 }}>
        {format(game.startTimeUTC, "dd MMMM Y hh:mm")}
        <div className="team-info">
          {teamRender(game.awayTeam)}
          <span>-</span>
          {teamRender(game.homeTeam, true)}
        </div>
      </div>
    )
  }

  const teamRender = (team: Team, reverse?: boolean) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={team.logo} className="logo" />
          <span>{team.name.default}</span>
          <span className="record">{team.record}</span>
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
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        inline
      />
      <div>
        {games.map((game, index, arr) => gameRender(game, arr.length - 1 === index))}
      </div>
    </>
  )
}

export default App;
