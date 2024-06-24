import { FilterCheckbox } from "../FilterCheckbox";
import { filter } from "../../reducers/flightListReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FilterValue } from "../../types/types";
import { filterList } from "./utils";
import { FilterCheckboxProps } from "./types";

export const Filter = () => {
  const [filters, setFilters] = useState<FilterValue[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filter(filters));
  }, [filters]);

  return (
    <div className='filter'>
      <h3 className='filter__title'>КІЛЬКІСТЬ ПЕРЕСАДОК</h3>
      <div className='filter__list'>
        {filterList.map(({ label, filerValue }: FilterCheckboxProps) => (
          <FilterCheckbox
            label={label}
            key={label}
            filerValue={filerValue}
            setFilters={setFilters}
          />
        ))}
      </div>
    </div>
  );
};
