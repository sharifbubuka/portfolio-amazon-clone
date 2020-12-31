// Import useContext and dependencies from react
import React, { createContext, useContext, useReducer } from 'react'

// store the context returned by createContext() in a variable
export const StateContext = createContext()

// Wraps any component that will require data from this data layer
export const StateProvider = ({ reducer, initialState, children }) => ( 
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// This is how we pull information from the data layer
export const useStateValue = () => useContext(StateContext)