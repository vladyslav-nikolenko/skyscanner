import { CardProps } from "../components/Card/types";
import { FilterValue } from "../types/types";

export type InitialState = {
  flightList: CardProps[];
};

export type FilterListProps = {
  state: { flightList: CardProps[] };
  payload: FilterValue[];
};
