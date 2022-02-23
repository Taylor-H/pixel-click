import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
// import counterReducer from '../features/counter/counterSlice';
// // import { createStore, applyMiddleware } from 'redux'
// import loggerMiddleware from 'redux-logger'






const NUM_COLUMNS = 20
export const AVAILABLE_COLORS = [
  "red",
  "salmon",
  "orange",
  "yellow",
  "green",
  "mediumseagreen",
  "teal",
  "deepskyblue",
  "indigo",
  "violet",
  "black",
  "white",
  "brown",
  "tan",
  "peachpuff",
]

const initialState = {
  grid: [],
  selectedColor: AVAILABLE_COLORS[0]
}

// ACTION TYPES
const ADD_ROW    = 'ADD_ROW'
const PICK_COLOR = 'PICK_COLOR'
const COLORIZE   = 'COLORIZE'

// ACTION CREATORS
export const addRow = () => ({ type: ADD_ROW })
export const pickColor = (color) => ({ type: PICK_COLOR, color })
export const colorize = (row, column) => ({ type: COLORIZE, row, column })

const reducer = (state=initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_ROW:
      const newRow = Array(NUM_COLUMNS).fill('')
      return { ...state, grid: [...state.grid, newRow] }
    case PICK_COLOR:
      return { ...state, selectedColor: action.color }
    case COLORIZE:
      const newGrid = [...state.grid]
      newGrid[action.row] = [...newGrid[action.row]]
      newGrid[action.row][action.column] = state.selectedColor
      return { ...state, grid: newGrid}
    default:
      return state
  }
}
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  },
);
// const store = createStore(reducer, applyMiddleware(loggerMiddleware))

export default store
