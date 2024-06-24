import { Card } from "../Card";
import { SortButtons } from "../SortButtons";
import { MoreButton } from "../MoreButton";
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
      {newList.map(({ price, firstDirection, returnDirection, id }) => (
        <Card
          price={price}
          firstDirection={firstDirection}
          returnDirection={returnDirection}
          key={id}
        />
      ))}
      <MoreButton />
    </div>
  );
};
