import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('survey')

? {
  klar: JSON.parse(localStorage.getItem('survey')).klar, 
  timesUp: false,
  fraga1: '',
  fraga2: '',
  fraga3: '',
  fraga4: '',    
}
: {
  klar: false,
  timesUp: false,
  fraga1: '',
  fraga2: '',
  fraga3: '',
  fraga4: '',  
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
    },
    setTimesUp: (store, action) => {
      store.timesUp = action.payload 
    }
  }
})

export default survey