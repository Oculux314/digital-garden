import { FC } from "react";

type ProfileProps = {
  src: string;
  name: string;
  url: string;
}

const Profile: FC<ProfileProps> = ({src, name, url}) => {
  return (
    <a href={url}>
      <img src={src} alt={name}/>
    </a>
  );
}

export default Profile;
