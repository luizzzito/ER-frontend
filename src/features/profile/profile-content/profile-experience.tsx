import ShowExperiences from "../experiences/show-experiences/show-experiences";
import Typography from "@mui/material/Typography";
import EditExperienceModal from "../experiences/edit-experiences/modal";
import { Experience } from "core/profiles/types";
import { boxStyles } from "./styles/styles";

const ProfileExperience = ({
  isEditable,
  currentProfileExperience,
}: ProfileExperienceProps) => {
  return (
    <div>
      <Typography variant="h4" sx={ boxStyles }>Experiencia{isEditable && <EditExperienceModal />}</Typography>
      <ShowExperiences experience={currentProfileExperience} />
    </div>
  );
};

export interface ProfileExperienceProps {
  isEditable: boolean;
  currentProfileExperience: Experience[];
}

export default ProfileExperience;
