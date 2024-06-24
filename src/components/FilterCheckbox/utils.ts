import { FilterValue } from "../../types/types";
import { ManageFilterProps } from "./types";
import { reset } from "../../reducers/flightNubmerReducer";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { FilterCheckboxProps } from "../Filter/types";

const setNewFilter = ({ setFilters, filerValue }: ManageFilterProps) => {
  setFilters((prevState: FilterValue[]) => {
    if (prevState.some((filter) => filter === filerValue)) {
      return prevState;
    }
    return [...prevState, filerValue];
  });
};

const removeFilter = ({ setFilters, filerValue }: ManageFilterProps) => {
  setFilters((prevState: FilterValue[]) =>
    prevState?.filter((filter) => filter !== filerValue)
  );
};

export const onCheckboxClick = ({
  label,
  filerValue,
  setFilters,
}: FilterCheckboxProps) => {
  const checkBox = document.getElementById(label) as HTMLInputElement;
  const isCheckboxNotChecked = checkBox?.checked != true;

  if (isCheckboxNotChecked) {
    setNewFilter({ setFilters, filerValue });
  } else {
    removeFilter({ setFilters, filerValue });
  }
};

export const resetNumberOfFlights = (dispatch: Dispatch<UnknownAction>) => {
  dispatch(reset());
};
