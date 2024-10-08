"use client";
import { useAppContext } from "@/app/context";
import PlantCard from "@/components/plantCard";
import { User } from "next-auth";

export default function PlantGrid({ user }: { user: string }) {
  const context = useAppContext();
  const plants = context.state.plants;

  return (
    <div className="aspect-square h-full grid grid-cols-3">
      {plants.map((plant, index) => {
        return (
          <div key={index} className="col">
            <PlantCard key={index} plant={plant} user={user} />
          </div>
        );
      })}
    </div>
  );
}
