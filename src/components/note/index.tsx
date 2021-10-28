import React, { useEffect, useState } from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux"
import {addNoteCitiesSuccess, fetchNoteCitiesSuccess, selectNote} from "../../store/weatherRedux/weather_reducer"
import locastorage from '../../services/locastorage';
import NotFound from '../../pages/notfound';
import {AiOutlineCloseCircle} from "react-icons/all"

const WeatherNote: React.FC<{}> = () => {
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch()
    const mynotes = useSelector(selectNote)
    let [notes, setNotes] = useState<any>()

    const addNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addNoteCitiesSuccess(inputValue))
        setInputValue("")
    };

    console.log("notes", mynotes)

    useEffect(()=>{
        setNotes(dispatch(fetchNoteCitiesSuccess(locastorage.get("notes"))))
    }, [])

    // let notes = locastorage.get("notes")
    // console.log(notes)
    const deleteNote = async (note_id: number | null | undefined | any | string) => {
        // setNotes(mynotes?.filter((note: { id: any; })=> note.id !== note_id))
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

                    { !mynotes ? <NotFound message="No Notes Yet"/>:
                    mynotes?.map((note: { id: number | null | undefined | any | string; note_description: string | null | undefined; })=>
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
