import styled from 'styled-components';
import shoppingCart from './images/shopping-cart.svg';

export default function PlayerCard({ player }) {
  return (
    <Card>
      <TopWrapper>
        <h3>{player.name.toUpperCase()}</h3>
        <Img src={shoppingCart} alt="shopping Cart Icon" />
      </TopWrapper>
      <p>{player.position.toUpperCase()}</p>
      <p>{player.free_transfer ? 'free transfer' : player.price + ' €'}</p>
      <p>{player.club.toUpperCase()}</p>

      <p>
        {' '}
        Email: <a href={`mailto:${player.email}`}>{player.email}</a>
      </p>
    </Card>
  );
}
const Card = styled.article`
  background-color: #662469;
  border-radius: 0.4rem;
  color: white;
  padding: 1.2rem 1rem;
  height: 14rem;
  min-width: calc((100% - 2rem) / 3);
  box-shadow: 1px 1px 3px black;
  font-family: sans-serif;

  h3 {
    margin-top: 0;
    font-size: 2rem;
  }
  p {
    margin: 0.6rem 0;
  }

  a {
    color: white;
  }
`;
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Img = styled.img`
  width: 30px;
`;
