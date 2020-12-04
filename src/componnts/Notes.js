import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export const Notes = ({notes, onRemove}) => {

    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => {
                return <CSSTransition key={note.id} classNames={'note'} timeout={600}>
                    <li className="list-group-item note">
                        <span>
                            <strong>{note.title}</strong>
                            <small>{note.date}</small>
                        </span>
    
                        <button type="button" 
                            className="btn btn-outline-danger btm-sm"
                            onClick={() => onRemove(note.id)}    
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            })}
        </TransitionGroup>
    )
}