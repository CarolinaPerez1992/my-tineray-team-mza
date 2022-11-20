import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import baseURL from '../../url'

const getCities = createAsyncThunk('getCities', async ()=> {
 const res = await axios.get(`${baseURL}api/cities`)
 return res.data.data
})
const filterCities = createAsyncThunk('filterCities', async (data)=> {
    const res = await axios.get(`${baseURL}api/cities?${data.continents}&name=${data.search}`)
    let info = {
        response: res.data.data,
        search: data.search,
        checkBox: data.continents,
        check: data.continentsChecked
    }
    return info
   })

const citiesActions = {
    getCities,
    filterCities
}

export default citiesActions