import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import { modalStyle } from "./styles";
import { Portfolio, Profile } from "core/profiles/types";

const ProjectInfoModal = ({ profile, project, setIsOpen }: Props) => {
  const getYear = (date: string | number | Date) =>
    new Date(date).getFullYear();

  return (
    <Box sx={modalStyle}>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          overflow: "hidden",
          borderRadius: { xs: "none", sm: "6px 6px 0px 0px" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "25% 25%",
            backgroundColor: "#D9D9D9",
            filter: "blur(4px)",
            transform: "scale(1.1)",
          }}
          component="img"
          src={project.imagePrincipal!}
        />

        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "30px",
            width: "30px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            "&:hover": {
              backgroundColor: "white",
            },
            margin: "10px",
          }}
        >
          <ArrowBackIcon sx={{ color: "black" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          mx: "24px",
          my: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyItems: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "inter",
                  fontSize: "26px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                {project.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  component="a"
                  href={`/profile/${profile.userId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "inter",
                    fontSize: "12px",
                  }}
                >
                  {profile.user.name} {profile.user.lastname}
                </Box>

                {!project.url ? (
                  <Typography sx={{ fontFamily: "inter", fontSize: "12px" }}>
                    {project.url ? project.url : "No hay url para mostrar"}
                  </Typography>
                ) : (
                  <Box
                    component="a"
                    href={project.url}
                    sx={{
                      textDecoration: "none",
                      fontFamily: "inter",
                      fontSize: "12px",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.url}
                  </Box>
                )}
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                {getYear(project.dateEnd)} | {project.location}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxHeight: "200px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontFamily: "inter",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "normal",
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {project.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: { xs: "100%" },
            height: "200px",
            overflowX: { xs: "auto" },
          }}
        >
          {project.image && project.image.length === 0 ? (
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  display: "flex",
                  fontSize: "28px",
                  color: "#545454",
                }}
              >
                No hay imágenes{" "}
              </Typography>
              <BrokenImageIcon
                sx={{
                  display: "flex",
                  fontSize: "32px",
                  alignSelf: "center",
                  marginLeft: "10px",
                }}
              />
            </Box>
          ) : (
            project.image!.map((image) => (
              <Card
                sx={{
                  display: "flex",
                  maxWidth: "150px",
                  width: "100%",
                  marginBottom: "12px",
                }}
                key={image}
              >
                <CardMedia
                  sx={{
                    display: "flex",
                    height: "150px",
                    width: "100%",
                  }}
                  image={image}
                  title={project.title}
                ></CardMedia>
              </Card>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

interface Props {
  profile: Profile;
  project: Portfolio;
  setIsOpen: (isOpen: boolean) => void;
}
export default ProjectInfoModal;
