import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginState = {
  login: string;
  pass: string;
  auth: string | null;
  error: boolean;
  errorMessage: string;
};

const initialState: LoginState = {
  login: "",
  pass: "",
  auth: "",
  error: false,
  errorMessage: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeLoginValue(state, action: PayloadAction<string>) {
      state.login = action.payload;
    },
    changePassValue(state, action: PayloadAction<string>) {
      state.pass = action.payload;
    },
    isAuth(state) {
      state.auth = localStorage.getItem("auth");
    },
    login(state) {
      if (state.login === "admin" && state.pass === "12345") {
        localStorage.setItem("auth", "true");
        state.auth = "true";
        state.error = false;
        state.errorMessage = "";
        state.login = "";
        state.pass = "";
      } else {
        state.error = true;
        state.errorMessage = `Ім'я користувача або пароль введено неправильно`;
        state.login = "";
        state.pass = "";
      }
    },
    logout(state) {
      localStorage.clear();
      state.auth = null;
    },
  },
});

export const { changeLoginValue, changePassValue, login, isAuth, logout } =
  loginSlice.actions;

export default loginSlice.reducer;
