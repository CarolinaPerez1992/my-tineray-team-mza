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

   const createNewCity = createAsyncThunk('newCity', async(newCity) => {
    try{
        const res = await axios.post(`${baseURL}api/cities`, newCity)
    if(res.data.id){
        let info = {
            id: res.data.id,
            success: true,
            response: newCity
        }
        return info
    }else{
        let info = {
            success:false,
            messages: res.data.message
        }
        return info
    }
}catch(error){
    return {
        success: false,
        response: 'An error ocurred'
    }
}
})
const citiesActions = {
    getCities,
    filterCities,
    createNewCity
}

export default citiesActions