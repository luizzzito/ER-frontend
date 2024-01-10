import { Button, Box, Typography } from "@mui/material";
import { useCallback } from "react";
import {
  buttonStyle,
  titleStyles,
  skillTitleStyle,
  descriptionStyles,
} from "../../../../styles";
import ShowSkills from "./show-skills/show-skills.component";

import AddSkillField from "./add-skill-field";
import SpinnerAbsolute from "components/spinner-absolute";
import { useSkillsModalContext } from "../skills-modal-context/use-skills-modal-context";
import { SkillType } from "core/skills/types";
import useProfileContext from "features/profile/profile-context/use-profile-context";

function useCloseModal(setIsOpen: (open: boolean) => void) {
  return useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
}

export interface Props {
  setIsOpen: (open: boolean) => void;
}

const ModalContent = ({ setIsOpen }: Props) => {
  const { loading, skillType } = useSkillsModalContext();
  const closeModal = useCloseModal(setIsOpen);
  const { profile } = useProfileContext();

  return (
    <Box>
      {loading && <SpinnerAbsolute />}
      <Typography sx={titleStyles}>
        {skillType === SkillType.Hard
          ? `Gestionar habilidades duras`
          : `Gestionar habilidades blandas`}
      </Typography>
      <Typography sx={descriptionStyles}>
        {skillType === SkillType.Hard
          ? `En esta sección podrás modificar las habilidades duras que muestres al publico en tu perfil y cv.`
          : `En esta sección podrás modificar las habilidades blandas que muestres al publico en tu perfil y cv.`}
      </Typography>
      <Typography sx={skillTitleStyle}>Nueva habilidad</Typography>
      <AddSkillField />
      <Box sx={{ border: "solid 1px #CBCBCB", borderRadius: "6px", p: "10px" }}>
        <Typography sx={skillTitleStyle}>
          Habilidades a mostrar sólamente en el currículum
        </Typography>
        <ShowSkills
          skills={profile.skills.filter(
            (item) => item.type === skillType && item.isVisible === true
          )}
        />
        <Box
          sx={{ border: "solid 1px #CBCBCB", borderRadius: "6px", p: "10px" }}
        >
          <Typography sx={skillTitleStyle}>
            Habilidades a mostrar en el currículum y el perfil
          </Typography>
          <ShowSkills
            skills={profile.skills.filter(
              (item) => item.type === skillType && item.isVisible === false
            )}
          />
        </Box>
      </Box>

      <Button
        sx={buttonStyle}
        className="exp-show-button"
        type="submit"
        onClick={closeModal}
      >
        Listo
      </Button>
    </Box>
  );
};

export default ModalContent;
