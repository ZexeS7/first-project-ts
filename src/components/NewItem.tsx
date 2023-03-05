import { Delete } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

type NewItemProps = {
  id: number;
  title: string;
  body: string;
  removeItem(id: number): any;
};

const NewItem: React.FC<NewItemProps> = ({ id, title, body, removeItem }) => {
  function remuve() {
    removeItem(id);
  }
  return (
    <Box
      sx={{
        m: 1,
        textAlign: "left",
        border: 1,
        borderRadius: "5px",
        borderColor: "#AED6F1",
        backgroundColor: "#F8F9F9",
      }}>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "700",
          backgroundColor: "#AED6F1",
          borderRadius: "3px 3px 0 0",
          paddingLeft: "5px",
        }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          px: "5px",
        }}>
        {body}
      </Typography>
      <Button size="small" onClick={remuve} startIcon={<Delete />}>
        Delete
      </Button>
    </Box>
  );
};

export default NewItem;
