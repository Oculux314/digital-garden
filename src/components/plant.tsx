import { PlantType } from "@/models/plant";
import Image from "next/image";
import flowers from "@/config/flowers";

export type PlantProps = {
  plant: PlantType;
};

const Plant = ({ plant }: PlantProps) => {
  const {name} = plant;
    
let imageUrl;

  switch (name) {
    case "Blissful Bud":
      imageUrl = flowers.blissfulbud.imageurl;
      break;
    case "Cobalt Rose":
      imageUrl = flowers.cobaltrose.imageurl;
      break;
    case "Fire Petal":
      imageUrl = flowers.firepetal.imageurl;
      break;
    case "Giggleweed":
      imageUrl = flowers.giggleweed.imageurl;
      break;
    case "Moon Blossom":
      imageUrl = flowers.moonblossom.imageurl;
      break;
    case "Shadow Bloom":
      imageUrl = flowers.shadowbloom.imageurl;
      break;
    case "Thunderbud":
      imageUrl = flowers.thunderbud.imageurl;
      break;
    case "Violet Menace":
      imageUrl = flowers.violetmenace.imageurl;
      break;
    default:
      imageUrl = "/img/flowericons/violetmenace.png";
      break;

  }

  return (
    <div className="relative">
      <div>
        <Image 
          src={imageUrl} 
          alt={plant.name} 
          objectFit="cover" 
          className="w-full h-full" 
          style={{ marginTop: '15px' }} 
        />
        <div className="relative w-full text-white text-center bg-opacity-20 bg-black">
          {plant.lastWatered.toDateString()}
        </div>
      </div>
    </div>
    // <div className="fixed mt-4 ml-4 bg-black">
    //   <div className="border border-black">insert plant image here</div>
    //   <div>this plant is on growth stage: {plant.stage}</div>
    //   <div>this plant last watered {plant.lastWatered.toISOString()}</div>
    // </div>
  );
};

export default Plant;
