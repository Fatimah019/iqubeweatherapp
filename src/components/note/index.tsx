import React from 'react';
import './index.css';
import {useDispatch} from "react-redux"
import {addNoteCitiesSuccess} from "../../store/weatherRedux/weather_reducer"
import locastorage from '../../services/locastorage';

const WeatherNote: React.FC<{}> = () => {
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch()
    
    const addNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addNoteCitiesSuccess(inputValue))
        setInputValue("")
    };

    let notes = locastorage.get("notes")
    const deleteNote = (note_id: any) => {
             console.log(notes.length)
        notes = notes?.filter((id: number)=> (id) !== note_id)
        // locastorage.set("notes2", notes)
        if(notes.length === 0){
            locastorage.removeItem("notes")
        }
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
                {notes?.map((note: { id: number | null | undefined; note_description: string | null | undefined; })=><li key={note.id}><p onClick={()=>deleteNote(note?.id)}>x</p>{note?.note_description}</li>)}
            </ul>
        </>
    );
};

export default WeatherNote;
