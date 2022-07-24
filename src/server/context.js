import React from "react";
import { useQuery } from 'react-query'

import { createContext } from "react";

export const Context = createContext([]);

//TODO: create a better name for this function 
export const Provider = ({ children }) => {
  
    const getApiTheme = () => {
        const { isLoading, error, data } = useQuery('repoData', () =>
          fetch('https://www.themealdb.com/api.php').then(res =>
            res.json()
          )
        )
    }

  const dataObject = {getApiTheme}

  return <Context.Provider value={dataObject}>{children}</Context.Provider>;
}