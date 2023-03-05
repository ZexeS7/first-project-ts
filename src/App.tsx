import { AccountBox, AttachMoney, Login, Language } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import NewsPage from "./components/NewsPage";
import ProfilePage from "./components/ProfilePage";
import RequireAuth from "./hoc/RequireAuth";
import { useAppDispatch, useAppSelector } from "./hook";
import { isAuth } from "./store/loginSlice";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import RequireAuthLogin from "./hoc/RequireAuthLogin";

function App() {
  const auth = useAppSelector((state) => state.login.auth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                <Button component="span">{t("home")}</Button>
              </Link>
              <Link to="/news">
                <Button component="span">{t("news")}</Button>
              </Link>
            </ButtonGroup>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              <Language sx={{ color: "#FFFFFF" }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <MenuItem
                onClick={() => {
                  i18next.changeLanguage("uk");
                  handleClose();
                }}>
                Українська
              </MenuItem>
              <MenuItem
                onClick={() => {
                  i18next.changeLanguage("en");
                  handleClose();
                }}>
                English
              </MenuItem>
            </Menu>
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
        <Route
          path="/login"
          element={
            <RequireAuthLogin>
              <LoginPage />
            </RequireAuthLogin>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
