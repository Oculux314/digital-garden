import ToolBar from "./toolBar";
import ProfileBar from "./profileBar";
import PlantGrid from "./plantgrid";
import { getFriends } from "@/routes/userRoute";
import { url } from "inspector";

const Garden = async () => {
const users = await getFriends();
const profiles = users.map((user) => {
  return {url:"/gardens/" + user.id, name:user.name, src:user.image}
});
  return (
    <div className="flex w-full h-full spacing justify-between items-start">
      <ToolBar/>
      <PlantGrid/>
      <ProfileBar profiles={profiles}/>
    </div>
  );
};

export default Garden;
