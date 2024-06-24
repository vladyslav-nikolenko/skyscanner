import { Filter } from "../Filter";
import { FlightList } from "../FlightList";

export const PageContent = () => {
  return (
    <main className='main-content'>
      <Filter />
      <FlightList />
    </main>
  );
};
