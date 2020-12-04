import React from 'react';
import {ADD_NOTE, REMOVE_NOTE, FETCH_NOTES, SHOW_LOADER} from '../types';

const handlers = {
    DEFAULT: state => state,
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
    [REMOVE_NOTE]: (state, {payload}) => ({...state, notes: state.notes.filter(el => el.id !== payload)}) 
};

export const FirebaseReduser = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}