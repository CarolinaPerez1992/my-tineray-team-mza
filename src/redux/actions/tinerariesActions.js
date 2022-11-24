import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import baseURL from '../../url'

const getTineraryUser = createAsyncThunk('getTineraryUser', async(id) => {
    try{
        const res = await axios.get(`${baseURL}api/itineraries?userId=${id}`)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const deleteTinerary = createAsyncThunk('deleteTinerary', async(id) => {
    try{
        const res = await axios.delete(`${baseURL}api/itineraries/${id}`)
        return res.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const updateTinerary = createAsyncThunk('updateTinerary', async(data) => {
    try{
        const res = await axios.put(`${baseURL}api/itineraries/${data.id}`, data.tineraries)
        return res.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const tinerariesActions = {

    getTineraryUser,
    deleteTinerary,
    updateTinerary
}

export default tinerariesActions