export type FlightInfo = {
  direction: string;
  schedule: string;
  tripDuration: string;
  connections: string[];
};

export type CardProps = {
  price: number;
  firstDirection: FlightInfo;
  returnDirection: FlightInfo;
};
