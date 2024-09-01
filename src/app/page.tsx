import Garden from "@/components/composite/garden";
import { notFound } from "next/navigation";
import { auth } from "@/config/auth";
import { addPlant, getUserByEmail } from "@/services/userService";
import flowers from "@/config/flowers";
import { createPlant } from "@/services/plantService";

export default async function Home() {
  const session = await auth();
  const email = session?.user?.email;
  if (!email) {
    notFound();
  }
  console.log(email);
  const user = await getUserByEmail(email);
  if (!user) {
    notFound();
  }
  console.log(user);
  if (user.plants.length == 0) {
    let keys = Object.keys(flowers);
    let values = Object.values(flowers);
    for (let i = 0; i < 2; i++) {
      let index = Math.floor(Math.random()*keys.length);
      let plant = await createPlant({
        name: values[index].name,
        type: keys[index],
        lastWatered: new Date(),
      });
      addPlant(user, plant);
      console.log(plant);
    }
  }
  return (
    <div className="h-full w-full">
      <Garden />
    </div>
  );
}
