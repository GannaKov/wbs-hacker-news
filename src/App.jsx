import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import NewsPage from "./components/NewsPage";

const basicUrl = "http://hn.algolia.com/api/v1/search?tags=story";

const fetchHits = async (searchQuery = "", page) => {
  const { data } = await axios.get(`${basicUrl}${searchQuery}&page=${page}`);
  return data;
};

const App = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  //http://hn.algolia.com/api/v1/search?query=react&tags=story

  useEffect(() => {
    setLoading(true);
    const queryAdd = query ? `&query=${query}` : "";
    fetchHits(queryAdd, page)
      .then((res) => setNews(res))
      .catch((error) => {
        console.log(error.message);
        alert("Sorry (. Something is wrong");
        setNews([]);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  // useEffect(() => {
  //   const queryAdd = `&query=${query}`;
  //   fetchHits(queryAdd)
  //     .then((res) => setNews(res))
  //     .catch((error) => {
  //       console.log(error.message);
  //       alert("Sorry (. Something is wrong");
  //       setNews([]);
  //     })
  //     .finally(() => setLoading(false));
  // }, [query]);
  return (
    <div>
      <Header setQuery={setQuery} query={query} setPage={setPage} />
      {loading && <Spinner />}
      {news && <NewsPage news={news} page={page} setPage={setPage} />}
    </div>
  );
};

export default App;
