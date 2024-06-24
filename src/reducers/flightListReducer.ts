import { createSlice } from "@reduxjs/toolkit";
import initialFlightList from "../flightList.json";
import { InitialState } from "./types";
import {
  filterLits,
  getTotalTripDuration,
  optimalCompareTickets,
} from "./utils";
import { SortVariants } from "../components/SortButtons";
import { CardProps } from "../components/Card";

export const initialState: InitialState = {
  flightList: initialFlightList,
};

const flightListSlice = createSlice({
  name: "flightList",
  initialState,
  reducers: {
    sort: (state, { payload }) => {
      if (payload.includes(SortVariants.CHEAPEST)) {
        state.flightList.sort(
          (a: CardProps, b: CardProps) => a.price - b.price
        );
      }

      if (payload.includes(SortVariants.FASTEST)) {
        state.flightList.sort((a: CardProps, b: CardProps) => {
          const firstFlightsDuration = getTotalTripDuration(a);
          const secontFlightsDuration = getTotalTripDuration(b);

          return firstFlightsDuration - secontFlightsDuration;
        });
      }

      if (payload.includes(SortVariants.OPTIMAL)) {
        state.flightList.sort((a: CardProps, b: CardProps) =>
          optimalCompareTickets(a, b)
        );
      }
    },
    filter: (state, { payload }) => filterLits({ state, payload }),
  },
});

export const { sort, filter } = flightListSlice.actions;

export default flightListSlice.reducer;
