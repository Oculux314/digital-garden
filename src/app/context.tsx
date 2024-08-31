"use client";
import { PlantType } from "@/models/plant";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { createContext, useContext, useState } from "react";

// Initial state
export type ToolTypes = "shovel" | "water" | "unselected";

type StateType = {
  session: Session | null;
  toolSelector: ToolTypes;
  plants: PlantType[];
};

type ContextType = {
  state: StateType;
  selectTool: (newTool: ToolTypes) => void;
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
  const [state, setState] = useState<StateType>({
    session: initialSession,
    toolSelector: "unselected",
  });

  // if (!state.session) {
  //   return signIn();
  // }

  // State modifier functions
  const selectTool = (newTool: ToolTypes) => {
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
  if (!context.state.session) {
    signIn();
  }
  return context;
};
