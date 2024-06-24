import { FlightInfo } from "./types";

export const getConnectionsInfo = ({
  connections,
}: Pick<FlightInfo, "connections">) => {
  switch (connections.length) {
    case 1:
      return "1 пересадка";
    case 2:
    case 3:
      return `${connections.length} пересадки`;
    default:
      return "Без пересадок";
  }
};
