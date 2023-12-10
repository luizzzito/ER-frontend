import ShowExperiences from "../experiences/show-experiences/show-experiences";
import Typography from "@mui/material/Typography";
import EditProfileModal from "../edit-profile/modal";
import { Experience } from "core/profiles/types";

const ProfileExperience = ({
  isEditable,
  currentProfileExperience,
}: Props) => {
  return (
    <div>
      <Typography variant="h4">Experiencia:</Typography>
      {isEditable && <EditProfileModal />}
      <ShowExperiences experience={currentProfileExperience} />
    </div>
  );
};

export interface Props {
  isEditable: boolean;
  currentProfileExperience: Experience[];
}

export default ProfileExperience;
