"use client";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { createContext, useContext, useState } from "react";

// Initial state

type ContextType = {
  session: Session | null;
};

// Create context

const AppContext = createContext<ContextType | null>(null);

type AppContextProviderProps = {
  children: React.ReactNode;
  initialSession: Session | null;
};

export default function AppContextProvider({
  children,
  initialSession,
}: AppContextProviderProps) {
  const [state, setState] = useState<ContextType>({
    session: initialSession,
  });

  if (!state.session) {
    return signIn();
  }

  // State modifier functions

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

// Custom hook to get state

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  if (!context.session) {
    signIn();
  }
  return context;
};
