import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  minimizeImageFromApi,
  removeSameStartDuplicates,
  stickyBody,
  useKeyboardBehaviour,
  useOutsideClick,
} from '../../utils';
import playstation from '../../images/playstation.svg';
import steam from '../../images/steam.svg';
import xbox from '../../images/xbox.svg';
import nintendo from '../../images/nintendo.svg';
import apple from '../../images/apple.svg';
import gamepad from '../../images/gamepad.svg';
import emptyStar from '../../images/star-empty.png';
import fullStar from '../../images/star-full.png';
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

  const getPlatform = (platform) => {
    return (
      {
        'PlayStation 4': playstation,
        'PlayStation 5': playstation,
        'Xbox Series S/X': xbox,
        'Xbox S': xbox,
        'Xbox One': xbox,
        'Nintendo Switch': nintendo,
        PC: steam,
        iOS: apple,
      }[platform] || gamepad
    );
  };

  const getStars = (rating) => {
    return [0, 0, 0, 0, 0].map((_, index) => (
      <img
        src={index + 1 <= Math.round(rating) ? fullStar : emptyStar}
        alt="star"
      />
    ));
  };

  // effects

  useOutsideClick(ref, exitModal);
  useKeyboardBehaviour('escape', exitModal);

  return !isLoading ? (
    <CardShadow>
      <Detail layoutId={pathId} ref={ref}>
        <Stats>
          <div className="rating">
            <motion.h3 layoutId={`title ${pathId}`}>{detail.name}</motion.h3>
            {getStars(detail.rating)}
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {removeSameStartDuplicates(
                detail.platforms || [],
                4,
                'platform.name'
              ).map((data) => (
                <img
                  key={data.platform.id}
                  src={getPlatform(data.platform.name)}
                  alt={data.platform.name}
                />
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
  ) : null;
};

export default GameDetail;
