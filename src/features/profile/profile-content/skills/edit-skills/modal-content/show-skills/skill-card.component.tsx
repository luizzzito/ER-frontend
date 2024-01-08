import { Typography, Box, IconButton } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import useDeleteSkill from "../../use-delete-skill";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SkillCard = ({ item }: Props) => {
  const deleteSkill = useDeleteSkill(item.id);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <Box
        style={style}
        sx={{
          ...skillTitleStyles,
          height: "40px",
          flexDirection: "row",
          display: "flex",
          maxWidth: "30px",
        }}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        {item.name}
      </Box>
      {/*      <IconButton
        onClick={deleteSkill}
        sx={{ zIndex: 100, position: "relative", marginTop: "-32px" }}
      >
        <ClearIcon sx={{ color: "#545454" }} /></IconButton>*/}
    </>
  );
};

interface Props {
  item: Skill;
}

export default SkillCard;
