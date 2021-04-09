import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { stickyBody, useKeyboardBehaviour, useOutsideClick } from '../../utils';
import {
  CardShadow,
  Description,
  Detail,
  Info,
  Media,
  Platforms,
  Stats,
} from './GameDetail.styled';

const GameDetail = ({ ...props }) => {
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
          <Detail ref={ref}>
            <Stats>
              <div className="rating">
                <h3>{detail.name}</h3>
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
              <img src={detail.background_image} alt={detail.name} />
            </Media>
            <Description>
              <p>{detail.description_raw}</p>
            </Description>
            <div className="gallery">
              {detail.short_screenshots?.map((short_screenshot) => (
                <img
                  key={short_screenshot.id}
                  src={short_screenshot.image}
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
