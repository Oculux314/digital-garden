"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { createContext, use, useContext, useEffect, useState } from "react";

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

  const path = usePathname();

  useEffect(() => {
    if (!state.session && path !== "/test/loginpagetest") {
      signIn(); // Trigger sign-in process if session is not available
    }
  }, [state.session, path]);

  // Show loading or authentication indicator while processing
  if (!state.session) {
    return <p>Loading...</p>; // Or another loading indicator
  }

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

// Custom hook to get state
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  if (!context.session) {
    signIn(); // Trigger sign-in process if session is not available
  }
  return context;
};
