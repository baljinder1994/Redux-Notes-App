import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import './App.css'
const App = () => {
  const[editNote,setEditNote]=useState(null)

  return (
    <div className="app">
      <h1>Notes Application</h1>
      <NoteForm editNote={editNote} setEditNote={setEditNote}/>
      <NotesList setEditNote={setEditNote}/>
    </div>
  );
};

export default App;
