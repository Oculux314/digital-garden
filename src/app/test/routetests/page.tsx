import { searchForUser } from "@/routes/userRoute";

export default async function RouteTestPage() {
  const searchedUsers = await searchForUser("a");

  return (
    <div>
      <h1 className="text-lg">Route Test Page</h1>
      <ul>
        {searchedUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
