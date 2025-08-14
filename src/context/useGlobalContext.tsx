import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
  inited: boolean;
  setInited: (inited: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalContext");
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

export default function GlobalProvider(props: GlobalProviderProps) {
  const { children } = props;

  const [inited, setInited] = useState(false)

  return (
    <GlobalContext.Provider value={{
      inited,
      setInited
    }}>
      {children}
    </GlobalContext.Provider>
  );
}