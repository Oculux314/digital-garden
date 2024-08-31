"use client";

import { getOnePlusTwo } from "@/routes/exampleRoute";
import { addPlant } from "@/routes/plantRoute";

export default function BackendTestPage() {
  async function testBackend() {
    const result = await getOnePlusTwo();
    console.log(result);
  }

  function createPlant() {
    addPlant({ name: "Fern", type: "Indoor" });
    console.log("Plant created");
  }

  return (
    <div>
      <h1>Backend Test Page</h1>
      <p>
        This page is for testing the backend of the application. It is not meant
        to be seen by the user.
      </p>
      <button className="border" onClick={testBackend}>
        Button: console.log(1 + 2) from backend
      </button>
      <button className="border" onClick={createPlant}>
        Create Plant
      </button>
    </div>
  );
}
