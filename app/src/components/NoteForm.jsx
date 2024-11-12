import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, updateNote } from '../redux/notesSlice';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = ({ editNote, setEditNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  // Autofill form fields if editing a note
  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editNote) {
      // Update existing note
      dispatch(updateNote({ id: editNote.id, title, content }));
      setEditNote(null);
    } else {
      // Add a new note
      dispatch(addNote({ id: uuidv4(), title, content }));
    }
    // Clear form fields
    setTitle('');
    setContent('');
  };

  const handleCancel = () => {
    setEditNote(null);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">{editNote ? 'Update Note' : 'Add Note'}</button>
      {editNote && <button type="button" onClick={handleCancel}>Cancel</button>}
    </form>
  );
};

export default NoteForm;
