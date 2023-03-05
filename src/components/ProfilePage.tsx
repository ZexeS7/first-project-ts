import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch } from "../hook";
import { logout } from "../store/loginSlice";

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  function setout(): void {
    dispatch(logout());
  }
  return (
    <Container>
      <h1>Profile Page</h1>
      Name: Admin
      <Box component={"form"}>
        <Button type="submit" variant="outlined" onClick={setout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default ProfilePage;
