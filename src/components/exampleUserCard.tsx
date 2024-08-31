"use client";

import { useAppContext } from "../app/context";

export default function ExampleUserCard() {
  const { session } = useAppContext();

  return (
    <div>
      Client-rendered Component: current user is{" "}
      {session?.user?.email ?? "not logged in"}
    </div>
  );
}
