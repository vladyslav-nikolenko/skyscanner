import img from "../../../public/a4eLogo.png";
import { CardProps } from "./types";
import { getConnectionsInfo } from "./utils";

export const Card = ({ price, firstDirection, returnDirection }: CardProps) => {
  return (
    <div className='card card--margin-bottom'>
      <div className='card__title'>
        <h2>{price.toFixed(3)}$</h2>
        <img src={img} />
      </div>

      {[firstDirection, returnDirection].map(
        ({ direction, schedule, tripDuration, connections }, index) => {
          return (
            <div className='card__information' key={index}>
              <span className='card__info-item card__info-item--top-item'>
                {direction}
              </span>

              <span className='card__info-item card__info-item--top-item'>
                В ДОРОЗІ
              </span>

              <span className='card__info-item card__info-item--top-item'>
                {getConnectionsInfo({ connections })}
              </span>

              <span className='card__info-item card__info-item--bottom-item'>
                {schedule}
              </span>

              <span className='card__info-item card__info-item--bottom-item'>
                {tripDuration}
              </span>

              <span className='card__info-item card__info-item--bottom-item'>
                {connections?.join(", ")}
              </span>
            </div>
          );
        }
      )}
    </div>
  );
};
