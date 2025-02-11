/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const NewContext = createContext();
export function DataContext({ children }) {
  const [state, setState] = useState(0);
  return (
    <NewContext.Provider value={{ state, setState }}>
      {children}
    </NewContext.Provider>
  );
}

export default DataContext;
