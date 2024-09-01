import Garden from "@/components/composite/garden";
import { auth } from "@/config/auth";
import { getUserByEmail, getUserById } from "@/routes/userRoute";

export default async function Home() {
  const context = await auth();
  const userEmail = context?.user?.email;

  const user = await getUserByEmail(userEmail!);

  console.log("***************", user);

  return (
    <div className="h-full w-full">
      <Garden user={user?.id!} />
    </div>
  );
}
