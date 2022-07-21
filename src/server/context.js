import React from "react";

import { createContext } from "react";

export const Context = createContext([]);

export const Provider = ({ children }) => {

  const data = {}

  return <Context.Provider value={data}>{children}</Context.Provider>;
}