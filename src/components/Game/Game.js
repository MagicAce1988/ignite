import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { minimizeImageFromApi, stickyBody } from '../../utils';
import { loadDetail } from '../../redux/actions/detailActions/actions';
import { Container } from './Game.styled';
import { motion } from 'framer-motion';

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
    <Container layoutId={id} onClick={loadDetailHandler} {...props}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${id}`}
          src={minimizeImageFromApi(background_image, 640)}
          alt={name}
        />
      </Link>
    </Container>
  );
};

export default Game;
