import {  WeatherInitialState , WeatherNoteInterface} from './weather_types';
import { RootState } from '../rootReducer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiCallBegan } from '../actions';
import {v4 as uuidv4} from "uuid"
import locastorage from '../../services/locastorage';

const initialState: WeatherInitialState = {
    isLoading: false,
    data: undefined,
    error: undefined,
    topCitiesData: [],
    weatherNote:[],
    favourite:[]
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchTopCitiesSuccess: (state, action: PayloadAction<[]>) => {
            state.topCitiesData = action.payload;
            state.isLoading = false;
        },
        removeTopCitiesSuccess: (state, action: PayloadAction<string>) => {
            state.topCitiesData =state.topCitiesData?.filter((city)=> (city.Key) !== action.payload)
        },
        addNoteCitiesSuccess:{
            reducer: (state, action: PayloadAction<any>)=>{
                state.weatherNote?.push(action.payload)
                locastorage.set("notes", state.weatherNote)
            },
            prepare:(note_description: string)=>({
                payload:{
                    id: uuidv4(),
                    note_description,
                    
                }  as WeatherNoteInterface,

            })
           
        },
        removeNoteCitiesSuccess: (state, action:PayloadAction<string>) => {
           locastorage.removeItem("notes")
        },
        fetchWeatherSuccess: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        searchWeatherByLocationSuccess: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        addToFavouriteSuccess: {
            reducer: (state, action: PayloadAction<any>)=>{
                state.favourite?.push(action.payload)
            },
            prepare:(note_description: string)=>({
                payload:{
                    id: uuidv4(),
                    note_description,
                    
                }  as WeatherNoteInterface,

            })
          
        },
        fetchWeatherStart: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },

        fetchWeatherFailed: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
        },
    },
});

export const {
    fetchTopCitiesSuccess,
    removeTopCitiesSuccess,
    fetchWeatherSuccess,
    searchWeatherByLocationSuccess,
    addNoteCitiesSuccess,
    removeNoteCitiesSuccess,
    addToFavouriteSuccess,
    fetchWeatherStart,
    fetchWeatherFailed,
} = weatherSlice.actions;
export default weatherSlice.reducer;

export type ParamsProps = {
    query: string;
};

export const searchWeatherByLocation = ({ query }: ParamsProps) =>
    apiCallBegan({
        url:`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_WEATHER}&query=${query}`,
        // url:`api.openweathermap.org/data/2.5/weather?q=${query}&appid=a1b2b7c571bbe827844b734e3f48850c`,
        method: 'GET',
        onSuccess: fetchWeatherSuccess.type,
        onStart: fetchWeatherStart.type,
        onError: fetchWeatherFailed.type,
    });

export const fetchTopCities = () =>
    apiCallBegan({
        url: `https://dataservice.accuweather.com/locations/v1/topcities/${50}?apikey=${
            process.env.REACT_APP_OTHER_API_KEY
        }`,
        method: 'GET',
        onSuccess: fetchTopCitiesSuccess.type,
        onStart: fetchWeatherStart.type,
        onError: fetchWeatherFailed.type,
    });
// selectors
export const selectLoading = (state: RootState) => state?.weather;

export const selectWeather = (state: RootState) => state?.weather?.data;
export const selectTopCitiesWeather = (state: RootState) => state?.weather?.topCitiesData;

export const selectNoteWeather = (state: RootState) => state?.weather?.weatherNote;
export const selectFavourite= (state: RootState) => state?.weather?.favourite;

