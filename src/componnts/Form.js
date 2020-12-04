import React, {useState, useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext';
import {FirebaseContext} from '../context/firebase/firebaseContext'

export const Form = () => {

    const alert = useContext(AlertContext)

    const [value, setValue] = useState('');

    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault();

        if(value.trim()) {
            firebase.addNote(value.trim())
            .then(() => {
                alert.show('Заметка была создана', 'success');
            })
            .catch(() => {
                alert.show('Что-то пошло не так', 'danger');
            });
            setValue('')
            
        } else {
            alert.show('Введите название заметки', 'warning');
        }

    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input className="form-control" 
                    placeholder="enter text"
                    value={value}
                    onChange={e => setValue(e.target.value)} 
                />
            </div>
        </form>
    )
}