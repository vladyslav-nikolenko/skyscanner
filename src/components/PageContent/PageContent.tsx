import { Filter } from "../Filter/Filter";
import { FlightList } from "../FlightList/FlightList";

export const PageContent = () => {
  return (
    <main className='main-content'>
      <Filter />
      <FlightList />
    </main>
  );
};
