import { Card } from "../Card/Card";
import { SortButtons } from "../SortButtons/SortButtons";
import { MoreButton } from "../MoreButton/MoreButton";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";

export const FlightList = () => {
  const flightList = useSelector(
    (state: RootState) => state.flightList.flightList
  );
  const numberOfFlights = useSelector(
    (state: RootState) => state.numberOfFlights.numberOfFlights
  );

  const newList = flightList.slice(0, numberOfFlights);

  return (
    <div className='flight-list-container'>
      <SortButtons />
      {newList.map(({ price, firstDirection, returnDirection }) => (
        <Card
          price={price}
          firstDirection={firstDirection}
          returnDirection={returnDirection}
          key={price}
        />
      ))}
      <MoreButton />
    </div>
  );
};
