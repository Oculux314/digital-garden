"use client";

import { getOnePlusTwo } from "@/services/exampleService";

export default function BackendTestPage() {
  async function testBackend() {
    const result = await getOnePlusTwo();
    console.log(result);
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
    </div>
  );
}
