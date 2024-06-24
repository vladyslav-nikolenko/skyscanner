import { configureStore } from "@reduxjs/toolkit";
import flightListReducer from "./flightListReducer";
import numberOfFlightsReducer from "./flightNubmerReducer";

export const store = configureStore({
  reducer: {
    flightList: flightListReducer,
    numberOfFlights: numberOfFlightsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
