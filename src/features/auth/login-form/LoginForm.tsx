import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { FunctionComponent } from "react";
import useLoginFormState from "./use-login-form-state";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import ucabLogo from "../images/ucabLogo.webp";
import "../../../styles/index.css";
import {
  TextFieldTypography,
  UcabLogoStyles,
  ImageBoxStyles,
  FormBottomTypographyStyles,
  TextFieldStyles,
  ButtonStyles,
  CheckBoxStyles,
  QuestionBoxStylesFunct,
  LinkBoxStylesFunct,
  RedirectBoxStyles,
  FormBoxStylesFunct,
  FormBottomStylesFunct,
  InsideFormBottomStylesFunct,
  ForgotPasswordStylesFunct,
} from "./LoginFormStyles.tsx";
import { Link } from "react-router-dom";

const LoginForm: FunctionComponent<Props> = ({ disabled, onSubmit }) => {
  const { email, password, onChangeEmail, onChangePassword } =
    useLoginFormState();

  const [keepLogged, setKeepLogged] = useState(false);

  const handleKeepLoggedChange = () => {
    setKeepLogged(!keepLogged);
  };

  const { QuestionBoxStyles } = QuestionBoxStylesFunct();
  const { LinkBoxStyles } = LinkBoxStylesFunct();
  const { FormBoxStyles } = FormBoxStylesFunct();
  const { FormBottomStyles } = FormBottomStylesFunct();
  const { InsideFormBottomStyles } = InsideFormBottomStylesFunct();
  const { ForgotPasswordStyles } = ForgotPasswordStylesFunct();

  const LOGIN_BORDER_RADIUS = "11px";

  return (
    <>
      <Box sx={FormBoxStyles}>
        <Box sx={ImageBoxStyles}>
          <img src={ucabLogo} alt="UCAB Logo" style={UcabLogoStyles} />
        </Box>
        <Box>
          <Typography sx={TextFieldTypography}>Correo electronico</Typography>
          <TextField
            value={email}
            label=""
            type="email"
            onChange={onChangeEmail}
            disabled={disabled}
            sx={TextFieldStyles}
            InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
          />
          <Typography sx={TextFieldTypography}>Contraseña</Typography>
          <TextField
            value={password}
            label=""
            type="password"
            onChange={onChangePassword}
            disabled={disabled}
            sx={{ ...TextFieldStyles, marginBottom: "26px" }}
            InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
          />
          <Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={disabled}
              onClick={() => {
                onSubmit(email, password);
              }}
              sx={ButtonStyles}
            >
              Iniciar Sesión
            </Button>
          </Box>
          <Box sx={FormBottomStyles}>
            <Box sx={InsideFormBottomStyles}>
              <Checkbox
                checked={keepLogged}
                onChange={handleKeepLoggedChange}
                inputProps={{ "aria-label": "Checkbox" }}
                sx={CheckBoxStyles}
              />
              <Typography sx={FormBottomTypographyStyles}>
                Permanecer conectado
              </Typography>
            </Box>
            <Box sx={ForgotPasswordStyles}>
              <Link href="#" rel="noopener noreferrer">
                ¿Olvidó la contraseña?
              </Link>
            </Box>
          </Box>
          <Box sx={RedirectBoxStyles}>
            <Typography sx={QuestionBoxStyles}>
              ¿Aun no tienes cuenta?
            </Typography>{" "}
            <Link to="/register" style={LinkBoxStyles}>
              Registrate
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export interface Props {
  disabled: boolean;
  onSubmit: (email: string, password: string) => void;
}

export default LoginForm;
