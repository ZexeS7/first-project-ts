import { AccountBox, AttachMoney, Login } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import NewsPage from "./components/NewsPage";
import ProfilePage from "./components/ProfilePage";
import RequireAuth from "./hoc/RequireAuth";
import { useAppDispatch, useAppSelector } from "./hook";
import { isAuth } from "./store/loginSlice";

function App() {
  const auth = useAppSelector((state) => state.login.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(isAuth());
  }, [dispatch]);
  return (
    <div className="App">
      <AppBar position="static">
        <Container>
          <Toolbar>
            <AttachMoney></AttachMoney>
            <Typography variant="h6" component="span">
              My First Site
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <ButtonGroup
              variant="contained"
              aria-label="contained error button group">
              <Link to="/">
                <Button component="span">Home</Button>
              </Link>
              <Link to="/news">
                <Button component="span">News</Button>
              </Link>
            </ButtonGroup>
            {auth ? (
              <Link to="/profile">
                <IconButton>
                  <AccountBox sx={{ color: "white" }} />
                </IconButton>
              </Link>
            ) : (
              <Link to="/login">
                <IconButton>
                  <Login sx={{ color: "white" }} />
                </IconButton>
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
