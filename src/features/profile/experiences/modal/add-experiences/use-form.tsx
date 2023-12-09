import { addAProfileExperience } from "features/profile/services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import { FormEvent } from "react";

const useAddExperienceForm = ({ setContent, experience }: AddExperienceFormProps) => {
  const { token } = useAuthState();
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!token || !experience) return;
      const data = addAProfileExperience(experience, token);
      setContent(0);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { onSubmitForm };
};

export interface AddExperienceFormProps {
  setContent: (arg0: number) => void;
  experience: {
    businessName: string;
    role: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    description: string;
  };
}

export default useAddExperienceForm;
