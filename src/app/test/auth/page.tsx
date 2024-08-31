import ExampleUserCard from "@/components/exampleUserCard";
import { auth } from "@/config/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div>
      <h1>Examples of how to get auth</h1>
      <p>
        Server-rendered component: current user is{" "}
        {session?.user?.email ?? "not logged in"}
      </p>
      <ExampleUserCard />
    </div>
  );
}
