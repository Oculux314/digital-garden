"use client";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { createContext, useContext, useState } from "react";

// Initial state
export type tools = "shovel" | "water" | "unselected";

type StateType = {
  session: Session | null;
  toolSelector: "shovel" | "water" | "unselected";
};
type ContextType = {
  state: StateType;
  selectTool: (newTool: "shovel" | "water" | "unselected") => void;
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
    toolSelector: "unselected",
  });

  // if (!state.session) {
  //   return signIn();
  // }

  // State modifier functions
  const selectTool = (newTool: "shovel" | "water" | "unselected") => {
    setState({ ...state, toolSelector: newTool });
  };

  return (
    <AppContext.Provider value={{ state, selectTool }}>
      {children}
    </AppContext.Provider>
  );
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
