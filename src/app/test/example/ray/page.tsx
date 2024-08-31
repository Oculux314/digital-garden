import PlantCard from "@/components/plantCard";
import { PlantCardProps } from "@/components/plantCard";

export default function RayPage() {
  const plantMock = { name: "ray", type: "male", stage: 1, water: true };
  return <PlantCard plant={plantMock} />;
}
