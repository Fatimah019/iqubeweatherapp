import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import { selectWeather, selectLoading } from '../../store/weatherRedux/weather_reducer';
import SearchPage from '../locationWeather';
import NotFound from '../notfound';
import CustomLoader from '../../components/common/loader';

const SearchedPage: React.FC<{}> = () => {
    const weatherInfo = useSelector(selectWeather);
    const loading = useSelector(selectLoading);

    console.log(weatherInfo);
    return (
        <div>
            {weatherInfo?.current === undefined ? (
                <div className="not_found_container">
                    <NotFound message="Result not found" />
                </div>
            ) : (
                <>
                    {!loading.isLoading ? (
                        <SearchPage
                            city_name={weatherInfo?.request?.query}
                            date_updated={weatherInfo?.current?.observation_time}
                            time_updated={weatherInfo?.current?.observation_time}
                            weather_cloud_cover={'Cloud Cover' + ' ' + '-' + '' + weatherInfo?.current?.cloudcover}
                            weather_icons={weatherInfo?.current?.weather_icons}
                            weather_description={weatherInfo?.current?.weather_descriptions}
                            weather_feels_like={'Feels Like' + ' ' + '-' + '' + weatherInfo?.current?.feelslike}
                            temperature_value={weatherInfo?.current?.temperature}
                            humidity={weatherInfo?.current?.humidity}
                            visibility={weatherInfo?.current?.visibility}
                            pressure={weatherInfo?.current?.pressure}
                            wind_speed={'Speed' + ' ' + '-' + '' + weatherInfo?.current?.wind_speed}
                            wind_direction={'Direction' + ' ' + '-' + '' + weatherInfo?.current?.wind_dir}
                            wind_angle={'Angle' + ' ' + '-' + '' + weatherInfo?.current?.wind_degree}
                        />
                    ) : (
                        <CustomLoader visible={loading.isLoading} />
                    )}
                </>
            )}
        </div>
    );
};

export default SearchedPage;
