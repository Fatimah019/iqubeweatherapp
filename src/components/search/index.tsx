import React, { useEffect } from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { searchWeatherByLocation, ParamsProps } from '../../store/weatherRedux/weather_reducer';
import { useHistory } from 'react-router-dom';

type Props = {
    searchValue?: string;
};

const Search: React.FC<Props> = ({ searchValue }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState('');
    const history = useHistory();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
            searchWeatherByLocation({
                query: inputValue,
            } as ParamsProps),
        );
        history.push(`/city/${inputValue}`);
    };

    useEffect(() => {
        !inputValue && history.push(`/`);
    });

    return (
        <form className="search_container" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for places"
                className="input_field"
                value={searchValue}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setInputValue(ev.target.value)}
            />

            <button type="submit" className="search_icon_container">
                <img src="/assets/icons/search.png" alt="" className="search_icon" />
            </button>
        </form>
    );
};

export default Search;
