// weather types

export enum WEATHER_ACTION_TYPES {
    GET_LARGEST_CITIES_WEATHER = 'GET_LARGEST_CITIES_WEATHER',
    GET_SEARCHED_CITY_WEATHER = 'GET_SEARCHED_CITY_WEATHER',
}

// TYPESCRIPT TYPES
export type WeatherInitialState = {
    isLoading: boolean;
    error?: string;
    data?: WeatherInterface;
    topCitiesData?: TopCitiesWeatherInterface[];
    weatherNote?:WeatherNoteInterface[]
};

export type WeatherInterface = {
    location: locationWeatherInterface;
    current: currentWeatherInterface;
    request: requestWeatherInterface;
};
export type WeatherNoteInterface = {
    name: string;
};
export type TopCitiesWeatherInterface = {
    Key:string | null | undefined;
    EnglishName: string | null | number | undefined;
    GeoPosition: {
        Latitude: string | null | number | undefined;
    };
};
export type locationWeatherInterface = {
    country: string;
    name: string;
};

export type currentWeatherInterface = {
    temperature: number;
    observation_time: string | null | undefined;
    feelslike: number;
    cloudcover: number;
    weather_descriptions: Array<string>;
    weather_icons: Array<string>;
    wind_speed: number | null | undefined | string;
    wind_degree: number | null | undefined;
    wind_dir: number | null | undefined;
    pressure: number | null | undefined;
    humidity: number | null | undefined;
    visibility: number;
};

export type requestWeatherInterface = {
    query: string | null | undefined;
};
