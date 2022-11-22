import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../url";

const getHotels = createAsyncThunk("getHotels", async () => {
  try {
    const res = await axios.get(`${baseURL}api/hotels`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return {
      payload: Error,
    };
  }
});

const filterHotels = createAsyncThunk("filterHotels", async (data) => {
  try {
    const res = await axios.get(
      `${baseURL}api/hotels?name=${data.search}&order=${data.order}`
    );
    let info = {
      response: res.data.data,
      search: data.search,
      order: data.order,
    };
    return info;
  } catch (error) {
    console.log(error);
    return {
      payload: Error,
    };
  }
});
const createNewHotel = createAsyncThunk("newHotel", async (newHotel) => {
  try {
    const res = await axios.post(`${baseURL}api/hotels`, newHotel);
    if (res.data.id) {
      let info = {
        id: res.data.id,
        success: true,
        response: newHotel,
      };
      return info;
    } else {
      let info = {
        success: false,
        messages: res.data.message,
      };
      return info;
    }
  } catch (error) {
    return {
      success: false,
      response: "An error ocurred",
    };
  }
});

const hotelsActions = {
  getHotels,
  filterHotels,
  createNewHotel,
};

export default hotelsActions;
