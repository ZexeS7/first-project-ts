import { List } from "@mui/material";
import { useAppSelector } from "../hook";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  return (
    <List sx={{ width: "100%", maxWidth: 360, m: " 0 auto" }}>
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title}></TodoItem>
      ))}
    </List>
  );
};

export default TodoList;
