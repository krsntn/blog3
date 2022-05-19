import React, { createContext, useReducer } from 'react';

const initialState = {
  searchValue: '',
};

export const SearchBlogContext = createContext(initialState);

export const SearchBlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'update':
        return {
          ...state,
          searchValue: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  }, initialState);

  return (
    <SearchBlogContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchBlogContext.Provider>
  );
};
