import { useDispatch } from 'react-redux';
import { loadDetail } from '../../redux/actions/detailActions/actions';
import { Container } from './Game.styled';

const Game = ({
  gameInfo: { name, released, background_image, id, short_screenshots },
  ...props
}) => {
  // state and variables

  const dispatch = useDispatch();

  // handlers

  const loadDetailHandler = () => {
    dispatch(loadDetail(id, short_screenshots));
  };

  return (
    <Container onClick={loadDetailHandler} {...props}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={background_image} alt={name} />
    </Container>
  );
};

export default Game;
