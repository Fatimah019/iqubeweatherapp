import React from 'react';
import './index.css';
import {useDispatch} from "react-redux"
import {addNoteCitiesSuccess} from "../../store/weatherRedux/weather_reducer"
import locastorage from '../../services/locastorage';

const WeatherNote: React.FC<{}> = () => {
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch()
    let notes = locastorage.get("notes")

    const addNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addNoteCitiesSuccess(inputValue))
        setInputValue("")
    };

    const deleteNote = async (note_id: any) => {
        // notes = await notes?.filter((id: number)=> !note_id.include(id))
        let newNote = [...notes]
        newNote.splice(1, note_id)
        locastorage.removeItem("notes2")
        // locastorage.set("notes2", notes)
        // if(notes.length === 0){
        //     locastorage.removeItem("notes")
        // }
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
