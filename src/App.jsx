import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import NewsPage from "./components/NewsPage";

const App = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");

  const basicUrl = "http://hn.algolia.com/api/v1/search?tags=story";
  const fetchHits = async (searchQuery = "") => {
    const { data } = await axios.get(`${basicUrl}${searchQuery}`);

    console.log("data", data);
    return data;
  };
  //http://hn.algolia.com/api/v1/search?query=react&tags=story

  useEffect(() => {
    fetchHits()
      .then((res) => setNews(res.hits))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    const queryAdd = `&query=${query}`;
    fetchHits(queryAdd)
      .then((res) => setNews(res.hits))
      .catch((error) => console.log(error.message));
  }, [query]);
  return (
    <div>
      <Header setQuery={setQuery} query={query} />
      <NewsPage news={news} />
    </div>
  );
};

export default App;
