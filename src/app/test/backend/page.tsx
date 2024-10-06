"use client";

import { signIn } from "@/config/auth";
import { createPlant } from "@/routes/plantRoute";
import { createUser } from "@/routes/userRoute";

export default function BackendTestPage() {
  function addNewPlant() {
    createPlant({ name: "Fern", type: "Indoor", lastWatered: new Date() });
    console.log("Plant created");
  }

  function addNewUser() {
    createUser({ name: "John Doe" });
    console.log("User created");
  }

  return (
    <div>
      <h1>Backend Test Page</h1>
      <p>
        This page is for testing the backend of the application. It is not meant
        to be seen by the user.
      </p>
      <button className="border" onClick={addNewPlant}>
        Create Plant
      </button>
      <button className="border" onClick={addNewUser}>
        Create User
      </button>
      <button
        className="border"
        onClick={() => signIn("google", { redirectTo: "/" })}
      >
        Sign In
      </button>
    </div>
  );
}
