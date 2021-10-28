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
    // let [mynotes, setNotes] = useState([])

    let notes = locastorage.get("notes")
    const addNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addNoteCitiesSuccess(inputValue))
        setInputValue("")
    };

    const deleteNote = async (note_id: number | null | undefined | any | string) => {
        // let newNote = mynotes?.filter((note: { id: any; })=> note.id !== note_id)
        // setNotes(newNote)
        
        // console.log(mynotes?.filter((note: { id: any; })=> note.id !== note_id))
        // setNotes(mynotes?.filter((note: { id: any; })=> note.id !== note_id))

        // console.log(mynotes)
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
                    notes?.map((note: { id: number | null | undefined | any | string; note_description: string | null | undefined; })=>
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
