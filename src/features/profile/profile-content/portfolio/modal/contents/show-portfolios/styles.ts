const PRIMARY_DARKER = "#03652e";

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: {
    xs: 2,
    sm: 3,
    md: 4,
  },
  width: "43%",
  borderRadius: "6px",
};

export const titleStyles = {
  fontSize: { xs: "20px", sm: "22px", md: "30px" },
  fontFamily: "Inter",
  lineHeight: "normal",
  fontStyle: "normal",
  fontWeight: "700",
  pb: 2,
};

export const buttonStyle = {
  fontFamily: "Inter",
  borderRadius: "6px",
  background: "#007935",
  fontWeight: "bold",
  color: "white",
  textTransform: "capitalize",
  fontSize: "16px",
  px: 3,
  mb: 1,
  "&:hover": {
    backgroundColor: PRIMARY_DARKER,
  },
};

export const textFieldStyleA = {
  marginBottom: "20px",
  width: "100%",
};

export const inlineStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: {
    xs: "wrap",
    md: "nowrap",
    lg: "nowrap",
  },
  gap: "40px",
};
