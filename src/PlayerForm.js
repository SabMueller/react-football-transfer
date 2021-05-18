import styled from 'styled-components';
import { useState } from 'react';

export default function PlayerForm({ onAddPlayer }) {
  const initialPlayer = {
    name: '',
    price: '',
    free_transfer: false,
    club: '',
    position: '',
    email: '',
  };

  const [player, setPlayer] = useState(initialPlayer);

  function updatePlayer(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    if (event.target.type === 'checkbox') {
      fieldValue = event.target.checked;
    }

    setPlayer({ ...player, [fieldName]: fieldValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onAddPlayer(player);
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Player Name</label>
      <input
        type="text"
        name="name"
        onChange={updatePlayer}
        value={player.name}
      />

      <label htmlFor="price">Transfer Price (in €)</label>
      <input
        type="text"
        name="price"
        value={player.price}
        onChange={updatePlayer}
        disabled={player.free_transfer}
      />

      <label htmlFor="free_transfer">Free transfer?</label>
      <input
        type="checkbox"
        name="free_transfer"
        value={player.free_transfer}
        onChange={updatePlayer}
        checked={player.free_transfer}
        disabled={player.price.length >= 1}
      />

      <label htmlFor="club">Club</label>
      <select name="club" id="club" value={player.club} onChange={updatePlayer}>
        <option value="">Select the Club</option>
        <option value="FC Bayern München">FC Bayern</option>
        <option value="St. Pauli">St Pauli</option>
        <option value="FC Arsenal">FC Arsenal</option>
        <option value="Manchester city">Manchester City</option>
        <option value="FC Barcelona">FC Barcelona</option>
        <option value="Paris Saint-Germain">Paris Saint-Germain</option>
        <option value="FC Liverpool">FC Liverpool</option>
        <option value="Juventus Turin">Juventus Turin</option>
      </select>

      <label htmlFor="position">Position</label>
      <Position>
        <input
          type="radio"
          name="position"
          value="striker"
          onChange={updatePlayer}
          checked={player.position === 'striker'}
        />{' '}
        Striker
        <input
          type="radio"
          name="position"
          value="midfield"
          onChange={updatePlayer}
          checked={player.position === 'midfield'}
        />{' '}
        Midfield
        <input
          type="radio"
          name="position"
          value="defence"
          onChange={updatePlayer}
          checked={player.position === 'defence'}
        />{' '}
        Defence
        <input
          type="radio"
          name="position"
          value="goalie"
          onChange={updatePlayer}
          checked={player.position === 'goalie'}
        />{' '}
        Goalie
      </Position>
      <label htmlFor="email">Contact</label>
      <input type="email" name="email" onChange={updatePlayer} />
      <Buttons>
        <Button isPrimary type="submit">
          Add
        </Button>
        <Button type="cancel">Cancel</Button>
      </Buttons>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 0.5rem;
  margin-left: 10%;
  width: 22rem;

  label {
    font-weight: bold;
    font-family: sans-serif;
    margin-bottom: 0.5rem;
  }
  input,
  select {
    display: flex;
    font-size: 1.125rem;
    font-family: sans-serif;
    margin-bottom: 1.5rem;
  }
  input[type='checkbox'],
  input[type='radio'] {
    transform: scale(1.4);
  }
`;

const Position = styled.section`
  display: flex;
  gap: 1rem;
`;
const Buttons = styled.section`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
`;
const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  background: none;
  cursor: pointer;
  border: none;
  font-size: 1.2rem;
  width: 10rem;
  background: ${(props) => (props.isPrimary ? '#9e37a2' : 'none')};
  color: white;
`;
