import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('survey')
  ? {
    klar: JSON.parse(localStorage.getItem('survey')).klar,    
    fraga1: null,
    fraga2: null,
    fraga3: null,
    fraga4: null    
  }
  : {
    klar: null,
    fraga1: null,
    fraga2: null,
    fraga3: null,
    fraga4: null  
  }
  
    const survey = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setFraga1: (store, action) => {
      store.fraga1 = action.payload         
    },
    setFraga2: (store, action) => {
      store.fraga2 = action.payload         
    },
    setFraga3: (store, action) => {
      store.fraga3 = action.payload         
    },
    setFraga4: (store, action) => {
      store.fraga4 = action.payload         
    },
    setKlar: (store, action) => {
      store.klar = action.payload  
    }
  }
})

export default survey