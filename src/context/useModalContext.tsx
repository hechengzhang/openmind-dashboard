import { createContext, ReactNode, useContext } from "react";

interface ModalContextType {
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalContext");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export default function ModalProvider(props: ModalProviderProps) {
  const { children } = props;

  return (
    <ModalContext.Provider value={{
    }}>
      {children}
    </ModalContext.Provider>
  );
}