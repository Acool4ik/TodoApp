import React, {Fragment, useContext, useEffect} from 'react';
import {Form} from '../componnts/Form';
import {Notes} from '../componnts/Notes';
import {FirebaseContext} from '../context/firebase/firebaseContext';
import {Loader} from '../componnts/Loader'

export const Home = () => {
    const {loading, fetch, notes, removeNote} = useContext(FirebaseContext);

    useEffect(() => { fetch() }, [])

    return (
        <Fragment>
            <Form/>
            <hr/>

            {loading ? <Loader/> : <Notes notes={notes} onRemove={removeNote}/>}
        </Fragment>
    )
}

