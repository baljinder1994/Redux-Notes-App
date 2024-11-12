import{createSlice} from '@reduxjs/toolkit'

const loadFromLocalStorage=() =>{
    const savedNotes=localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
}

const savedToLocalStorage=(notes)=>{
    localStorage.setItem('notes',JSON.stringify(notes))
}

const notesSlice= createSlice({
    name:'notes',
    initialState:{
        notes:loadFromLocalStorage(),
    },
    reducers:{
        addNote:(state,action) =>{
            state.notes.push(action.payload)
            savedToLocalStorage(state.notes)

        },
        deleteNote:(state,action) =>{
            state.notes=state.notes.filter((note) => note.id !== action.payload);
            savedToLocalStorage(state.notes)
        },
        updateNote:(state,action) =>{
            const index=state.notes.findIndex((note) => note.id === action.payload.id)
            if(index !== -1){
                state.notes[index] = action.payload
                savedToLocalStorage(state.notes)
            }
        }
    }
})

export const {addNote,deleteNote,updateNote}= notesSlice.actions;
export default notesSlice.reducer