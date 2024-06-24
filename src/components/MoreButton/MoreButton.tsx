import { useDispatch } from "react-redux";
import { addMoreFlights } from "../../reducers/flightNubmerReducer";

export const MoreButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className='button button--wide'
      onClick={() => dispatch(addMoreFlights())}
    >
      Показати ще 5 квитків
    </button>
  );
};
