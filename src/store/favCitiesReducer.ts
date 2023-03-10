import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface FavoriteCitiesType {
    cities:string[]
}
const initialState: FavoriteCitiesType = {
    cities:[]
}
 const favCitiesSlice = createSlice({
    name: 'favoritesCities',
    initialState,
    reducers: {
        setFavCities: (state,action:PayloadAction<string[]>) => {
            state.cities = action.payload
        }
    }
    
 })
export const { setFavCities } = favCitiesSlice.actions;

export default favCitiesSlice.reducer;