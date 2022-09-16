import { createContext, useState, useReducer } from "react";
import {ACTION} from './action'

export const AppContext = createContext(null);

export default function MainContext({ children }) {
  function reducer(state, action){
    switch (action.type) {
      case ACTION.add:
        return [...state, action.payload];
    }
  }

  const [list, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ list, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
