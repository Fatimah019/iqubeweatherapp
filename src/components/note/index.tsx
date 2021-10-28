import React, { useEffect, useState } from 'react';
import './index.css';
import {useDispatch} from "react-redux"
import {addNoteCitiesSuccess} from "../../store/weatherRedux/weather_reducer"
import locastorage from '../../services/locastorage';
import NotFound from '../../pages/notfound';
import {AiOutlineCloseCircle} from "react-icons/all"

const WeatherNote: React.FC<{}> = () => {
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch()
    let [notes, setNotes] = useState(locastorage.get("notes"))

    const addNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addNoteCitiesSuccess(inputValue))
        setInputValue("")
    };

    // useEffect(()=>{
    //     setNotes(locastorage.get("notes"))
    // }, [notes])

    const deleteNote = async (note_id: any) => {
        let newNote = notes?.filter((note: { id: any; })=> note.id !== note_id)
        setNotes(newNote)
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

                    { !notes ? <NotFound message="No Notes Yet"/>:
                    notes?.map((note: { id: number | null | undefined; note_description: string | null | undefined; })=>
                        <li key={note.id}>
                            <p onClick={()=>deleteNote(note?.id)}>
                                x
                            </p>
                            {note?.note_description}
                        </li>)
                    }
                </ul>
        </>
    );
};

export default WeatherNote;
