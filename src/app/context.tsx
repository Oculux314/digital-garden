"use client";
import { PlantType } from "@/models/plant";
import {
  deletePlant as _deletePlant,
  getUserByEmail,
} from "@/routes/userRoute";
import { Session, User } from "next-auth";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const initialPlants: PlantType[] = [
  { id: "1", name: "Blissful Bud", type: "Flower", lastWatered: new Date(1) },
  { id: "2", name: "Cobalt Rose", type: "Flower", lastWatered: new Date(1) },
  {
    id: "3",
    name: "Fire Petal",
    type: "Succulent",
    lastWatered: new Date(1),
  },
  { id: "4", name: "Shadow Bloom", type: "Fern", lastWatered: new Date(1) },
  {
    id: "5",
    name: "Giggleweed",
    type: "Flower",
    lastWatered: new Date(1),
  },
  { id: "6", name: "Shadow Bloom", type: "Grass", lastWatered: new Date(1) },
  {
    id: "7",
    name: "Thunderbud",
    type: "Herb",
    lastWatered: new Date(1),
  },
  {
    id: "8",
    name: "Violet Menace",
    type: "Flower",
    lastWatered: new Date(1),
  },
  { id: "9", name: "Shadow Bloom", type: "Herb", lastWatered: new Date(1) },
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
  deletePlant: (id: string, user?: string) => void;
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
  }, [state.session, path, signIn]);

  // State modifier functions

  const selectTool = (newTool: ToolTypes) => {
    console.log("Switching to tool: ", newTool);
    setState({ ...state, selectedTool: newTool });
  };

  const deletePlant = async (id: string, userId?: string) => {
    if (!state.session?.user?.email) {
      console.log("No user found in session");
      return;
    }
    const user = await getUserByEmail(state.session?.user?.email);
    if (!user?.id) {
      console.log("No user found in session");
      return;
    }
    const newPlants = state.plants.map((plant) => {
      return plant?.id === id ? null : plant;
    });
    setState({ ...state, selectedTool: "unselected", plants: newPlants });
    await _deletePlant(userId ?? user.id, id);
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
  return context;
};
