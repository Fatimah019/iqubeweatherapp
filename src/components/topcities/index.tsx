import React, { useEffect } from 'react';
import './index.css';
import TopCitesCard from '../cards/topcitiesCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopCities, selectTopCitiesWeather, removeTopCitiesSuccess } from '../../store/weatherRedux/weather_reducer';

const TopCities: React.FC<{}> = () => {
    let weatherInfo = useSelector(selectTopCitiesWeather);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopCities());
    }, [dispatch]);

    const removeTop=(location_name: string | null | undefined)=>{
        dispatch(
            removeTopCitiesSuccess(location_name as string),
        );
    }

    return (
        <div className="city_container">
            <div className="city_card_header">
                <img src="/assets/icons/app_icon.png" alt="" />
                <p>Top Cities</p>
            </div>
            <div className="city_card_container">
                { weatherInfo?.slice(0, 5)?.map((item) => {
                    return (
                        <div key={item.Key}>
                            <button onClick={()=>removeTop(item.Key)}>remove</button>
                            <TopCitesCard 
                             lat_value={item?.GeoPosition.Latitude} location_name={item?.EnglishName} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopCities;
