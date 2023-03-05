import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Checkbox,
} from "@mui/material";
import { Clear } from "@mui/icons-material";
import { useAppDispatch } from "../hook";
import { remove } from "../store/todoSlice";

interface TodoItemProps {
  id: string;
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title }) => {
  const dispatch = useAppDispatch();
  return (
    <ListItem
      key={id}
      disableGutters
      secondaryAction={
        <IconButton
          aria-label="clear"
          onClick={() => {
            dispatch(remove(id));
          }}>
          <Clear />
        </IconButton>
      }>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText primary={title} sx={{ overflow: "hidden" }} />
    </ListItem>
  );
};

export default TodoItem;
