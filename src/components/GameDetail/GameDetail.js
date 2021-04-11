import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  minimizeImageFromApi,
  stickyBody,
  useKeyboardBehaviour,
  useOutsideClick,
} from '../../utils';
import {
  CardShadow,
  Description,
  Detail,
  Info,
  Media,
  Platforms,
  Stats,
} from './GameDetail.styled';

const GameDetail = ({ pathId, ...props }) => {
  // variables and state

  const { isLoading, game: detail } = useSelector((state) => state.details);
  const ref = useRef();
  const history = useHistory();

  // helpers

  const exitModal = () => {
    stickyBody(false);
    history.push('/');
  };

  // effects

  useOutsideClick(ref, exitModal);
  useKeyboardBehaviour('escape', exitModal);

  return (
    <>
      {!isLoading ? (
        <CardShadow>
          <Detail layoutId={pathId} ref={ref}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {detail.name}
                </motion.h3>
                <p>Rating: {detail.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {detail.platforms?.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={minimizeImageFromApi(detail.background_image, 1280)}
                alt={detail.name}
              />
            </Media>
            <Description>
              <p>{detail.description_raw}</p>
            </Description>
            <div className="gallery">
              {detail.short_screenshots?.map((short_screenshot) => (
                <img
                  key={short_screenshot.id}
                  src={minimizeImageFromApi(short_screenshot.image, 1280)}
                  alt="short screenshot"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      ) : null}
    </>
  );
};

export default GameDetail;
