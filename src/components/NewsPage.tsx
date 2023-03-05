import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { getNews, getOtherNews, removeNews } from "../store/newsSlice";
import NewItem from "./NewItem";

const NewsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  function addNews() {
    dispatch(getOtherNews());
  }
  function removeItem(id: number) {
    dispatch(removeNews(id));
  }
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  const news = useAppSelector((state) => state.news.news);
  return (
    <Container>
      <h1>New Page</h1>
      {news.map((el) => (
        <NewItem
          key={el.id}
          id={el.id}
          title={el.title}
          body={el.body}
          removeItem={removeItem}
        />
      ))}
      <Button variant="contained" onClick={addNews}>
        завантажити ще
      </Button>
    </Container>
  );
};

export default NewsPage;
