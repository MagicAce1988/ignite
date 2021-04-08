import React from 'react';
import { useSelector } from 'react-redux';
import { CardShadow, Detail } from './GameDetail.styled';

const GameDetail = ({ ...props }) => {
  // variables and state

  const detail = useSelector((state) => state.details.game);

  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{detail.name}</h3>
            <p>Rating: {detail.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {detail.platforms?.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={detail.background_image} alt={detail.name} />
        </div>
        <div className="description">
          <p>{detail.description_raw}</p>
        </div>
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
