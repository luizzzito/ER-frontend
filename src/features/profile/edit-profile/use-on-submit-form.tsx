import { useAuthState } from "hooks/use-auth-state";
import { updateProfile } from "../services/profile/update-profile.service";
import { FormEvent } from "react";
import { BackendError } from "app/exceptions";
import { toast } from "sonner";
import { UpdateProfileBody } from "../services/profile/config/config";

const useOnSubmitForm = ({ setIsOpen, user }: Props) => {
  const { token } = useAuthState();
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(user);
      if (!token || !user) return;
      const data = await updateProfile(
        token,
        user as unknown as UpdateProfileBody
      );
      console.log(data);
      setIsOpen(false);
      return data;
    } catch (error) {
      if (error instanceof BackendError) {
        toast.error(error.message);
      } else {
        toast.error("Error desconocido");
      }
    }
  };
  return { onSubmitForm };
};

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
  user: {
    name: string;
    description: string;
    mainTitle: string;
    residenceCountry: string;
  };
}
export default useOnSubmitForm;
