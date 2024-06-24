import { useDispatch } from "react-redux";
import { onCheckboxClick, resetNumberOfFlights } from "./utils";
import { FilterCheckboxProps } from "../Filter";

export const FilterCheckbox = ({
  label,
  filerValue,
  setFilters,
}: FilterCheckboxProps) => {
  const dispatch = useDispatch();

  return (
    <div className='checkbox'>
      <input className='checkbox__input' id={label} type='checkbox' />
      <label
        htmlFor={label}
        onClick={() => {
          onCheckboxClick({ label, filerValue, setFilters });
          resetNumberOfFlights(dispatch);
        }}
        className='checkbox__label'
      >
        {label}
      </label>
    </div>
  );
};
