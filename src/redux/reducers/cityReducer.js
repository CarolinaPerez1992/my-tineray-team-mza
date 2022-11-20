import { createReducer } from "@reduxjs/toolkit";
import citiesActions from '../actions/citiesActions'

const {getCities, filterCities} = citiesActions;
const initialState = {
    cities: [],
    continent: [],
    search: "",
    checkBox: "",
    checked: [],

}
const cityReducer = createReducer(initialState,
    (builder)=> {
        builder
            .addCase(getCities.fulfilled, (state, action) =>{
                let check = [...new Set (action.payload.map(city => city.continent))]
                return {...state, cities: action.payload, continent: check}
            })
            .addCase(filterCities.fulfilled,(state, action)=>{
                return { ...state, cities: action.payload.response, search: action.payload.search, checkBox: action.payload.checkBox, checked: action.payload.check}
            })
   
})

export default cityReducer
