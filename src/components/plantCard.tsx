type plantType = {
  plant: {
    name: string;
    type: string;
    stage: number;
    water: boolean;
  };
};

const PlantCard = ({ plant }: plantType) => {
  return <div>Plant Card</div>;
};

export default PlantCard;
