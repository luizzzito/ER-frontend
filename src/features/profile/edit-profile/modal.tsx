import { useState } from "react";
import { Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditProfileModalContent from "./modal-content";

const EditProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <EditIcon />
      </IconButton>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="edit profile"
        aria-describedby="used to edit profile"
      >
        <div>
          <EditProfileModalContent setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
