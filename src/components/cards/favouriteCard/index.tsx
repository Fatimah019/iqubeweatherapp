import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import { useDispatch } from 'react-redux';
import { ParamsProps, searchWeatherByLocation} from '../../../store/weatherRedux/weather_reducer';

interface Props {
    temp_value?: number | undefined | null | string;
    location_name?: string | Node | undefined | null | any | number;
}

const FavouriteCard: React.FC<Props> = ({ temp_value, location_name }) => {
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
    <>
    <div
            className="favourite_card"
            onClick={() => getCityWeather(location_name as string)}
        >
            <div className="favourite_card_temp_icon">
                <img src="/assets/icons/thermometer.png" alt="" />
            </div>
            <div className="favourite_card_star_icon">
                <img src="/assets/icons/star.png" alt="" />
            </div>
            <div className="favourite_card_temp_value">
                <h2>
                    {temp_value}
                    <sup>o</sup>
                </h2>
                <p>{location_name}</p>
            </div>
        </div>
    </>
    );
};

export default FavouriteCard;
