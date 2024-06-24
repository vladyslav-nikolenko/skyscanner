import { CardProps } from "../components/Card";
import { FilterValue } from "../types/types";
import { initialState } from "./flightListReducer";
import { FilterListProps } from "./types";

const getParsedTime = (time: string) => {
  const parsedTime = time.match(/(\d+)г\s*(\d+)хв/);

  const hours = parsedTime[1];
  const mins = parsedTime[2];
  return Number(hours) * 60 + Number(mins);
};

export const getTotalTripDuration = (ticket: CardProps) => {
  const firstDirectionDuration = getParsedTime(
    ticket.firstDirection.tripDuration
  );
  const returnDirectionDuration = getParsedTime(
    ticket.returnDirection.tripDuration
  );
  return firstDirectionDuration + returnDirectionDuration;
};

export const optimalCompareTickets = (a: CardProps, b: CardProps) => {
  const firstTripDuration = getTotalTripDuration(a);
  const secondTripDuration = getTotalTripDuration(b);

  // compare by duration
  if (firstTripDuration !== secondTripDuration) {
    return firstTripDuration - secondTripDuration;
  }

  // compare by connections
  const connectionsFirstTrip =
    a.firstDirection.connections.length + a.returnDirection.connections.length;
  const connectionsSecondTrip =
    b.firstDirection.connections.length + b.returnDirection.connections.length;

  if (connectionsFirstTrip !== connectionsSecondTrip) {
    return connectionsFirstTrip - connectionsSecondTrip;
  }

  // compare by price
  return a.price - b.price;
};

export const filterLits = ({ state, payload }: FilterListProps) => {
  let newState: CardProps[] = [];

  if (payload.includes(FilterValue.WITHOUT_CONNECTIONS)) {
    const without = initialState.flightList.filter(
      (trip) => !trip.firstDirection.connections.length
    );
    newState = [...newState, ...without];
  }
  if (payload.includes(FilterValue.ONE_CONNECTION)) {
    const one = initialState.flightList.filter(
      (trip) => trip.firstDirection.connections.length === 1
    );
    newState = [...newState, ...one];
  }
  if (payload.includes(FilterValue.TWO_CONNECTIONS)) {
    const two = initialState.flightList.filter(
      (trip) => trip.firstDirection.connections.length === 2
    );
    newState = [...newState, ...two];
  }
  if (payload.includes(FilterValue.THREE_CONNECTIONS)) {
    const three = initialState.flightList.filter(
      (trip) => trip.firstDirection.connections.length === 3
    );
    newState = [...newState, ...three];
  }
  state.flightList = newState;
  if (payload.includes(FilterValue.ALL_FLIGHTS) || payload.length === 0) {
    state.flightList = initialState.flightList;
  }
};
