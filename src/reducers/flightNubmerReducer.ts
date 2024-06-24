import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfFlights: 5,
};

const numberOfFlightsSlice = createSlice({
  name: "numberOfFlights",
  initialState,
  reducers: {
    addMoreFlights: (state) => {
      state.numberOfFlights = state.numberOfFlights + 5;
    },
    reset: () => initialState,
  },
});

export const { addMoreFlights, reset } = numberOfFlightsSlice.actions;

export default numberOfFlightsSlice.reducer;
