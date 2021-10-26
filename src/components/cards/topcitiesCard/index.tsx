import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import { useDispatch } from 'react-redux';
import { ParamsProps, searchWeatherByLocation } from '../../../store/weatherRedux/weather_reducer';

interface Props {
    icon_color?: Node;
    lat_value?: number | undefined | null | string;
    location_name?: string | Node | undefined | null | any | number;
}

const TopCitesCard: React.FC<Props> = ({ lat_value, location_name }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const getCityWeather = (location_name: string) => {
        history.push(`/city/${location_name}`);
        dispatch(
            searchWeatherByLocation({
                query: location_name,
            } as ParamsProps),
        );
    };
    return (
        <div
            className={
                lat_value === 37
                    ? 'hot_card'
                    : lat_value === 12
                    ? 'normal_card'
                    : lat_value === 0
                    ? 'cold_card'
                    : 'no_category'
            }
            onClick={() => getCityWeather(location_name as string)}
        >
            <div className="top_cities_card_temp_icon">
                <img src="/assets/icons/thermometer.png" alt="" />
            </div>
            <div className="top_cities_card_star_icon">
                <img src="/assets/icons/star.png" alt="" />
            </div>
            <div className="top_cities_card_temp_value">
                <h2>
                    {lat_value}
                    <sub>lat</sub>
                </h2>
                <p>{location_name}</p>
            </div>
        </div>
    );
};

export default TopCitesCard;
