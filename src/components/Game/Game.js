import { Container } from './Game.styled';

const Game = ({ gameInfo: { name, released, background_image }, ...props }) => (
  <Container {...props}>
    <h3>{name}</h3>
    <p>{released}</p>
    <img src={background_image} alt={name} />
  </Container>
);

export default Game;
