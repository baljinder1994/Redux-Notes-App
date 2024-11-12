import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../redux/notesSlice';

const NotesList = ({ setEditNote }) => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p>No notes available. Please add a note!</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="note-actions">
              <button onClick={() => setEditNote(note)}>Edit</button>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
