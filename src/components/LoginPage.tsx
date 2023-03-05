import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hook";
import { changeLoginValue, changePassValue, login } from "../store/loginSlice";

const LoginPage: React.FC = () => {
  const {
    login: loginState,
    pass: passState,
    error,
    errorMessage,
  } = useAppSelector((state) => state.login);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function changeLogin(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    dispatch(changeLoginValue(e.target.value));
  }
  function changePass(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    dispatch(changePassValue(e.target.value));
  }
  function logined(): void {
    dispatch(login());
    navigate("/profile");
  }
  return (
    <Container>
      <h1>Login Page</h1>
      <Box
        component="form"
        sx={{
          marginX: "auto",
          display: "grid",
          gap: "10px",
          maxWidth: "300px",
        }}>
        {error && (
          <Typography
            variant="subtitle1"
            sx={{
              color: "red",
            }}>
            {errorMessage}
          </Typography>
        )}
        <TextField
          error={error}
          id="outlined-basic"
          label="Login"
          value={loginState}
          onChange={changeLogin}
          variant="outlined"
        />
        <TextField
          error={error}
          id="outlined-basic"
          label="Password"
          type="password"
          value={passState}
          onChange={changePass}
          variant="outlined"
        />
        <Button type="submit" onClick={logined}>
          Login
        </Button>
        {localStorage.getItem("login")}
      </Box>
    </Container>
  );
};

export default LoginPage;
