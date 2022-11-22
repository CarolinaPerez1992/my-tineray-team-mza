import { createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsActions";

const { getHotels, filterHotels, createNewHotel } = hotelsActions;
const initialState = {
  hotels: [],
  order: "",
  search: "",
};
const hotelReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getHotels.fulfilled, (state, action) => {
      return { ...state, hotels: action.payload };
    })
    .addCase(filterHotels.fulfilled, (state, action) => {
      return {
        ...state,
        hotels: action.payload.response,
        search: action.payload.search,
        order: action.payload.order,
      };
    })
    .addCase(createNewHotel.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.hotels.push(action.payload.response);
      }
    });
});

export default hotelReducer;
