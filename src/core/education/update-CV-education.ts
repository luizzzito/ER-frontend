import axios from "axios";

// Own
import { BackendError } from "app/exceptions";
import { EDUCATION_URL, MessageResponse } from "./types";

export async function updateCVEducation(
  body: UpdateEducationBody,
  token: string,
  educationId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.patch(
      `${EDUCATION_URL}/my-education/${educationId}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface UpdateEducationBody {
  isVisible: boolean;
}
