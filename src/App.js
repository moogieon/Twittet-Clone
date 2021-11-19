import React, { createContext, useState } from "react";
import Home from "./units/home/home";
export const GlobalContext = createContext({});
export default function App({ pageProps, Component }) {
  const [aaa, setAAA] = useState([]);
  return (
    <GlobalContext.Provider>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}
