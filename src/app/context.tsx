"use client";
import { PlantType } from "@/models/plant";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { createContext, useContext, useState } from "react";
const initialPlants: PlantType[] = [
  { id: "1", name: "Rose", type: "Flower", stage: 2, lastWatered: new Date() },
  { id: "1", name: "Tulip", type: "Flower", stage: 1, lastWatered: new Date() },
  {
    id: "1",
    name: "Cactus",
    type: "Succulent",
    stage: 3,
    lastWatered: new Date(),
  },
  { id: "1", name: "Fern", type: "Fern", stage: 2, lastWatered: new Date() },
  {
    id: "1",
    name: "Sunflower",
    type: "Flower",
    stage: 4,
    lastWatered: new Date(),
  },
  { id: "1", name: "Bamboo", type: "Grass", stage: 2, lastWatered: new Date() },
  {
    id: "1",
    name: "Lavender",
    type: "Herb",
    stage: 1,
    lastWatered: new Date(),
  },
  {
    id: "1",
    name: "Orchid",
    type: "Flower",
    stage: 3,
    lastWatered: new Date(),
  },
  { id: "1", name: "Mint", type: "Herb", stage: 1, lastWatered: new Date() },
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

  // if (!state.session) {
  //   return signIn();
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
    <AppContext.Provider value={{ state, selectTool }}>
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
