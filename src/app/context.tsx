"use client";
import { PlantType } from "@/models/plant";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const initialPlants: PlantType[] = [
  { id: "1", name: "Rose", type: "Flower", stage: 2, lastWatered: new Date(1)},
  { id: "2", name: "Tulip", type: "Flower", stage: 1, lastWatered: new Date(1) },
  {
    id: "3",
    name: "Cactus",
    type: "Succulent",
    stage: 3,
    lastWatered: new Date(1),
  },
  { id: "4", name: "Fern", type: "Fern", stage: 2, lastWatered: new Date(1) },
  {
    id: "5",
    name: "Sunflower",
    type: "Flower",
    stage: 4,
    lastWatered: new Date(1),
  },
  { id: "6", name: "Bamboo", type: "Grass", stage: 2, lastWatered: new Date(1) },
  {
    id: "7",
    name: "Lavender",
    type: "Herb",
    stage: 1,
    lastWatered: new Date(1),
  },
  {
    id: "8",
    name: "Orchid",
    type: "Flower",
    stage: 3,
    lastWatered: new Date(1),
  },
  { id: "9", name: "Mint", type: "Herb", stage: 1, lastWatered: new Date(1) },
];

// Initial state
export type ToolTypes = "shovel" | "water" | "unselected";

type StateType = {
  session: Session | null;
  selectedTool: ToolTypes;
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
    selectedTool: "unselected",
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
    console.log("Switching to tool: ", newTool);
    setState({ ...state, selectedTool: newTool });
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
