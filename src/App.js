import styled from 'styled-components/macro';
import { useState } from 'react';
import PlayerForm from './PlayerForm';
import PlayerCard from './PlayerCard';

function App() {
  const [players, setPlayers] = useState([]);

  function addPlayers(player) {
    setPlayers([...players, player]);
  }

  return (
    <div className="App">
      <Headline>Add New Player</Headline>
      <Grid>
        <PlayerForm onAddPlayer={addPlayers} />
        <PlayerCards>
          {players.map((player) => (
            <PlayerCard player={player} />
          ))}
        </PlayerCards>
      </Grid>
    </div>
  );
}

export default App;

const Headline = styled.h1`
  font-family: 'Reggae One', cursive;
  text-align: center;
  color: #9e37a2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: 2fr 3fr;
  }
`;

const PlayerCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
`;
