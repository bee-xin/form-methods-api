/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const NewContext = createContext();
export function DataContext({ children }) {
  const [state, setState] = useState(0);
  const [data, setData] = useState([]);

  return (
    <NewContext.Provider value={{ state, setState, data, setData }}>
      {children}
    </NewContext.Provider>
  );
}

export default DataContext;
