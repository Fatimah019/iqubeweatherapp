import React, { useEffect } from 'react';
import './index.css';
import { AiOutlineSearch } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { selectWeather, searchWeatherByLocation, ParamsProps } from '../../store/weatherRedux/weather_reducer';
import { useHistory } from 'react-router-dom';

type Props = {
    searchValue?: string;
};

const WeatherNote: React.FC<Props> = ({ searchValue }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState('');
    const history = useHistory();

    const addNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValue);
    };

    return (
        <>
            <form className="note_field_container" onSubmit={addNote}>
                <input
                    type="text"
                    placeholder="Search for places"
                    className="note_input_field"
                    value={inputValue}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setInputValue(ev.target.value)}
                />
            </form>
            <ul className="note_result">
                <li>
                    <p>x</p>
                    {inputValue}
                </li>
                <li>
                    <p>x</p>
                    first note
                </li>
            </ul>
        </>
    );
};

export default WeatherNote;
