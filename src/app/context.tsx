"use client";
import { Session } from "next-auth";
import { createContext, useContext, useState } from "react";

// Initial state

type ContextType = {
  session: Session;
};

// Create context

const AppContext = createContext<ContextType | null>(null);

type AppContextProviderProps = {
  children: React.ReactNode;
  initialSession: Session;
};

export default function AppContextProvider({
  children,
  initialSession,
}: AppContextProviderProps) {
  const [state, setState] = useState<ContextType>({
    session: initialSession,
  });

  // State modifier functions

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

// Custom hook to get state

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
