import React from 'react';
import './index.css';
import WeatherCard from '../../components/cards/weatherCard';
import WeatherNote from '../../components/note';
import { addToFavouriteSuccess} from "../../store/weatherRedux/weather_reducer"
import {useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom';
import {AiFillLike} from "react-icons/all"

type Props = {
    city_name: string | null | undefined;
    date_updated: string | null | undefined;
    time_updated: string | null | undefined;
    weather_description: Array<string> | null | undefined;
    weather_cloud_cover: number | null | undefined | string;
    weather_feels_like: number | null | undefined | string;
    temperature_value: number | null | undefined;
    weather_icons: Array<string> | null | undefined;
    wind_speed?: number | null | undefined | string;
    wind_direction?: number | null | undefined | string;
    wind_angle?: number | null | undefined | string;
    humidity?: number | null | undefined;
    pressure?: number | null | undefined;
    visibility?: number | null | undefined;
};

const SearchPage: React.FC<Props> = ({
    city_name,
    date_updated,
    time_updated,
    weather_cloud_cover,
    weather_description,
    weather_feels_like,
    temperature_value,
    weather_icons,
    wind_direction,
    wind_speed,
    wind_angle,
    humidity,
    pressure,
    visibility,
}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const addToFavourite= async()=>{
        await dispatch(addToFavouriteSuccess(temperature_value, city_name))
        history.push("/")
    }
    return (
        <div className="search_page">
            <div className="search_page_header">
                <div className="search_page_header_left">
                    <h1>{city_name}</h1>
                    <span>Last updated: {date_updated}</span>
                </div>
                <div className="search_page_header_right">
                    <img src="/assets/icons/cresent.png" alt="" />
                    <h3>{time_updated}</h3>
                    <div className="add_to_fav" onClick={addToFavourite}>
                        <AiFillLike /> <span>Add to favourite</span>
                    </div>
                </div>
            </div>
            <div className="search_page_top">
                <div className="search_page_top_left">
                    <WeatherCard
                        card_title="Weather"
                        card_width_big
                        card_image={weather_icons && weather_icons}
                        description={weather_description && weather_description}
                        card_list={[weather_cloud_cover, weather_feels_like]}
                    />
                    {/* top bottom */}
                    <div className="other_weather_info_container">
                        <div>
                            <WeatherCard
                                card_title="Temperature"
                                card_image={'/assets/icons/thermometer.png'}
                                card_value={temperature_value + '°'}
                            />
                        </div>
                        <div>
                            <WeatherCard
                                card_title="Wind"
                                card_image={'/assets/icons/wind_icon.png'}
                                card_list={[wind_speed, wind_direction, wind_angle + '°']}
                            />
                        </div>
                        <div>
                            <WeatherCard
                                card_title="Pressure"
                                card_image={'/assets/icons/visibility_pressure.png'}
                                card_value={pressure}
                            />
                        </div>
                        <div>
                            <WeatherCard
                                card_title="Humidity"
                                card_image={'/assets/icons/humidity_icon.png'}
                                card_value={humidity}
                            />
                        </div>
                        <div>
                            <WeatherCard
                                card_title="Visibility"
                                card_image={'/assets/icons/visibility_pressure.png'}
                                card_value={visibility}
                            />
                        </div>
                    </div>
                </div>
                <div className="search_page_top_right">
                    <p>Notes</p>
                    <WeatherNote />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
