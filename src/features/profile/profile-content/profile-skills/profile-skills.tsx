import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Skill } from "core/profiles/types";
import AddSkillsModal from "features/profile/skills/add-skills/modal";
import ShowSkills from "features/profile/skills/show-skills/show-skills";
import { skillTitleTypographyStyles } from "./styles/styles";

const ProfileSkills = ({ isEditable, currentProfileSkills }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Typography sx={skillTitleTypographyStyles} variant="h4">
          Habilidades
        </Typography>
        {isEditable && <AddSkillsModal />}
      </Box>

      <ShowSkills skills={currentProfileSkills} isEditable={isEditable} />
    </Box>
  );
};

export interface Props {
  isEditable: boolean;
  currentProfileSkills: Skill[];
}

export default ProfileSkills;
