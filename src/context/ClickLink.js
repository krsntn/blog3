import React, { createContext, useReducer } from 'react';

const initialState = {
  clickLink: '',
};

export const ClickLinkContext = createContext(initialState);

export const CilckLinkContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'update':
        return {
          ...state,
          clickLink: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  }, initialState);

  return (
    <ClickLinkContext.Provider value={{ state, dispatch }}>
      {children}
    </ClickLinkContext.Provider>
  );
};
