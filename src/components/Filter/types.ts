import { FilterValue } from "../../types/types";
import type { Dispatch, SetStateAction } from "react";

export type FilterCheckboxProps = {
  label: string;
  filerValue: FilterValue;
  setFilters: Dispatch<SetStateAction<FilterValue[]>>;
};
