import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { stickyBody } from '../../utils';
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
    stickyBody(true);
    dispatch(loadDetail(id, short_screenshots));
  };

  return (
    <Container onClick={loadDetailHandler} {...props}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={background_image} alt={name} />
      </Link>
    </Container>
  );
};

export default Game;
