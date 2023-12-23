import Typography from "@mui/material/Typography";
import EditSkills from "./edit-skills";
import ShowSkills from "./show-profile-skills";
import useProfileContext from "../../profile-context/use-profile-context";

const ProfileSkills = () => {
  const { profile, isEditable } = useProfileContext();
  return (
    <div>
      <Typography variant="h4">
        Habilidades
        {isEditable && <EditSkills />}
      </Typography>
      <ShowSkills skills={profile.skills} />
    </div>
  );
};

export default ProfileSkills;
