import React from 'react';
import { useSelector } from 'react-redux';
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

  const detail = useSelector((state) => state.details.game);

  return (
    <CardShadow>
      <Detail>
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
  );
};

export default GameDetail;
