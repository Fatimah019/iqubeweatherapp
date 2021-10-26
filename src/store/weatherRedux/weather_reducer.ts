import { WeatherInitialState } from './weather_types';
import { RootState } from '../rootReducer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiCallBegan } from '../actions';

const initialState: WeatherInitialState = {
    isLoading: false,
    data: undefined,
    error: undefined,
    topCitiesData: [],
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchTopCitiesSuccess: (state, action: PayloadAction<[]>) => {
            state.topCitiesData = action.payload;
            state.isLoading = false;
        },
        fetchWeatherSuccess: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        searchWeatherByLocationSuccess: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.isLoading = false;
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
    fetchWeatherSuccess,
    searchWeatherByLocationSuccess,
    fetchWeatherStart,
    fetchWeatherFailed,
} = weatherSlice.actions;
export default weatherSlice.reducer;

export type ParamsProps = {
    query: string;
};

export const fetchWeather = () =>
    apiCallBegan({
        url: `http://api.weatherstack.com/current?access_key=95f1789fc550e442d7b826`,
        method: 'GET',
        onSuccess: fetchWeatherSuccess.type,
        onStart: fetchWeatherStart.type,
        onError: fetchWeatherFailed.type,
    });

export const searchWeatherByLocation = ({ query }: ParamsProps) =>
    apiCallBegan({
        url: `https://api.weatherstack.com/current?access_key=9fc550e442d7b826&query=${query}`,
        method: 'GET',
        onSuccess: fetchWeatherSuccess.type,
        onStart: fetchWeatherStart.type,
        onError: fetchWeatherFailed.type,
    });

export const fetchTopCities = () =>
    apiCallBegan({
        url: `http://dataservice.accuweather.com/locations/v1/topcities/${50}?apikey=${
            process.env.REACT_APP_API_KEY_2
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
