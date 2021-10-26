import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './weatherRedux/weather_reducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
