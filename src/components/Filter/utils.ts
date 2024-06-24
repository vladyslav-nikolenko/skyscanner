import { FilterValue } from "../../types/types";

export const filterList = [
  { label: "Всі", filerValue: FilterValue.ALL_FLIGHTS },
  {
    label: "Без пересадок",

    filerValue: FilterValue.WITHOUT_CONNECTIONS,
  },
  {
    label: "1 пересадка",

    filerValue: FilterValue.ONE_CONNECTION,
  },
  {
    label: "2 пересадки",

    filerValue: FilterValue.TWO_CONNECTIONS,
  },
  {
    label: "3 пересадки",
    filerValue: FilterValue.THREE_CONNECTIONS,
  },
];
