import React, { createContext, useReducer } from 'react';

const SiteLoadContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'loaded':
      return { ...state, initialLoad: false };
  }
};

const initialState = {
  initialLoad: true,
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SiteLoadContext.Provider value={{ state, dispatch }}>
      {children}
    </SiteLoadContext.Provider>
  );
};

export { SiteLoadContext, DataProvider };
