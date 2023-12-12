import { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useRegisterFormState from "./use-register-form-state";
import { RegisterPayload } from "../Register";

const RegisterForm: FunctionComponent<Props> = ({ disabled, onSubmit }) => {
  const {
    name,
    lastname,
    email,
    password,
    confirmPassword,
    onChangeName,
    onChangeLastname,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
  } = useRegisterFormState();
  return (
    <>
      <TextField
        value={name}
        label="Nombre"
        onChange={onChangeName}
        disabled={disabled}
      />
      <TextField
        value={lastname}
        label="Apellido"
        onChange={onChangeLastname}
        disabled={disabled}
      />
      <TextField
        value={email}
        label="Correo electronico"
        type="email"
        onChange={onChangeEmail}
        disabled={disabled}
      />
      <TextField
        value={password}
        label="Contraseña"
        type="password"
        onChange={onChangePassword}
        disabled={disabled}
      />
      <TextField
        value={confirmPassword}
        label="Confirmar contraseña"
        type="password"
        onChange={onChangeConfirmPassword}
        disabled={disabled}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={disabled}
        onClick={() => {
          onSubmit({ name, lastname, email, password, confirmPassword });
        }}
      >
        Registrarse
      </Button>
    </>
  );
};

export interface Props {
  disabled: boolean;
  onSubmit: ({
    name,
    lastname,
    email,
    password,
    confirmPassword,
  }: RegisterPayload) => void;
}

export default RegisterForm;
