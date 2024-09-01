"use client";
import { PlantType } from "@/models/plant";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const initialPlants: PlantType[] = [
  { id: "1", name: "Blissful Bud", type: "Flower", stage: 2, lastWatered: new Date(1)},
  { id: "2", name: "Cobalt Rose", type: "Flower", stage: 1, lastWatered: new Date(1) },
  {
    id: "3",
    name: "Fire Petal",
    type: "Succulent",
    stage: 3,
    lastWatered: new Date(1),
  },
  { id: "4", name: "Shadow Bloom", type: "Fern", stage: 2, lastWatered: new Date(1) },
  {
    id: "5",
    name: "Giggleweed",
    type: "Flower",
    stage: 4,
    lastWatered: new Date(1),
  },
  { id: "6", name: "Shadow Bloom", type: "Grass", stage: 2, lastWatered: new Date(1) },
  {
    id: "7",
    name: "Thunderbud",
    type: "Herb",
    stage: 1,
    lastWatered: new Date(1),
  },
  {
    id: "8",
    name: "Violet Menace",
    type: "Flower",
    stage: 3,
    lastWatered: new Date(1),
  },
  { id: "9", name: "Shadow Bloom", type: "Herb", stage: 1, lastWatered: new Date(1) },
];

// Initial state
export type ToolTypes = "shovel" | "water" | "unselected";

type StateType = {
  session: Session | null;
  toolSelector: ToolTypes;
  plants: (PlantType | null)[];
};

type ContextType = {
  state: StateType;
  selectTool: (newTool: ToolTypes) => void;
  deletePlant: (id: string) => void;
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
    plants: initialPlants,
  });

  const path = usePathname();

  useEffect(() => {
    if (!state.session && path !== "/test/loginpagetest") {
      signIn(); // Trigger sign-in process if session is not available
    }
  }, [state.session, path]);

  // Show loading or authentication indicator while processing
  // if (!state.session) {
  //   return <p>Loading...</p>; // Or another loading indicator
  // }

  // State modifier functions
  const selectTool = (newTool: ToolTypes) => {
    setState({ ...state, toolSelector: newTool });
  };

  const deletePlant = (id: string) => {
    const newPlants = state.plants.map((plant) => {
      return plant?.id === id ? null : plant;
    });
    setState({ ...state, plants: newPlants });
  };

  return (
    <AppContext.Provider value={{ state, selectTool, deletePlant }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to get state
export const useAppContext = (): ContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  if (!context.state.session) {
    signIn();
  }
  return context;
};
