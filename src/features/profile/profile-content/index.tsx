import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import {
  aboutMeSection,
  aboutMeTypographyStyles,
  bannerStyles,
  buttonStyles,
  contactSectionStyles,
  contactTitlesStyles,
  descriptionBoxStyles,
  descriptionStyles,
  editIconStyles,
  locationAndEditButtonStyles,
  locationBoxStyles,
  mainTitleStyles,
  nameSectionStyles,
  nameStyles,
  pageContainerStyles,
  skillsAndExperiencesBoxStyles,
  topSectionStyles,
  websiteBoxStyles,
  websiteTitleContainerStyles,
} from "./styles/styles";
import EditProfileModal from "./profile-data/modal";
import Experiences from "./experiences";
import Skills from "./skills";
import useTransformCareerEnum from "hooks/use-transform-career-enum";
import useProfileContext from "../profile-context/use-profile-context";
import useDownloadCurriculumPDF from "./use-download-curriculum-pdf";

const ProfileContent = () => {
  const { profile, isEditable } = useProfileContext();
  const transformedCareerName = useTransformCareerEnum(profile.mainTitle);
  const { downloadCurriculumPDF } = useDownloadCurriculumPDF(profile);

  return (
    <>
      <Box>
        <Box sx={bannerStyles}></Box>
        <Box sx={pageContainerStyles}>
          <Box
            sx={{
              ...{
                width: "90%",
                mx: { lg: "auto", md: "auto", xs: "20px" },
                mt: "30px",
              },
              ...topSectionStyles,
            }}
          >
            <Box sx={nameSectionStyles}>
              <Box>
                <Typography variant="h4" sx={nameStyles}>
                  {profile.user.name} {profile.user.lastname}{" "}
                  <Box sx={editIconStyles}>
                    {isEditable && <EditProfileModal />}
                  </Box>
                </Typography>
                <Typography variant="h4" sx={mainTitleStyles}>
                  {transformedCareerName}
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={buttonStyles}
                  onClick={downloadCurriculumPDF}
                >
                  Descargar CV
                </Button>
              </Box>
              <Box
                sx={{ width: { xs: "100%", sm: "30%", md: "30%", lg: "20%" } }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={buttonStyles}
                  onClick={downloadCurriculumPDF}
                >
                  Descargar CV
                </Button>
              </Box>
            </Box>
            <Box sx={aboutMeSection}>
              <Box sx={descriptionBoxStyles}>
                <Typography variant="h5" sx={aboutMeTypographyStyles}>
                  Sobre Mí
                </Typography>
                {!profile.description ? (
                  <Typography>El perfil no tiene descripción.</Typography>
                ) : (
                  <Typography sx={descriptionStyles}>
                    {profile.description}
                  </Typography>
                )}
              </Box>
              <Box sx={contactSectionStyles}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={locationAndEditButtonStyles}>
                    <Box sx={locationBoxStyles}>
                      <LocationOnIcon />
                      &nbsp;
                      <Typography sx={contactTitlesStyles}>
                        Ubicación
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <EditIcon />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "inter",
                      fontSize: "18px",
                    }}
                  >
                    Puerto Ordaz, Venezuela
                  </Typography>
                </Box>
                <Box sx={websiteBoxStyles}>
                  <Box sx={websiteTitleContainerStyles}>
                    <LanguageIcon />
                    &nbsp;
                    <Typography sx={contactTitlesStyles}>Website</Typography>
                  </Box>

                  <Typography sx={{ fontFamily: "inter", fontSize: "18px" }}>
                    www.abcdefge.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={skillsAndExperiencesBoxStyles}>
            <Skills />
            <Experiences />
          </Box>
          <Box sx={{ display: { sm: "none" }, width: { xs: "100%" } }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={buttonStyles}
            >
              Descargar CV
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileContent;
