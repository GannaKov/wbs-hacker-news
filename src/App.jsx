import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import NewsPage from "./components/NewsPage";

const App = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const basicUrl = "http://hn.algolia.com/api/v1/search?tags=story";
  const fetchHits = async (searchQuery = "") => {
    setLoading(true);
    const { data } = await axios.get(`${basicUrl}${searchQuery}`);
    return data;
  };
  //http://hn.algolia.com/api/v1/search?query=react&tags=story

  useEffect(() => {
    fetchHits()
      .then((res) => setNews(res))
      .catch((error) => {
        console.log(error.message);
        alert("Sorry (. Something is wrong");
        setNews([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const queryAdd = `&query=${query}`;
    fetchHits(queryAdd)
      .then((res) => setNews(res))
      .catch((error) => {
        console.log(error.message);
        alert("Sorry (. Something is wrong");
        setNews([]);
      })
      .finally(() => setLoading(false));
  }, [query]);
  return (
    <div>
      <Header setQuery={setQuery} query={query} />
      {loading && <Spinner />}
      {news && <NewsPage news={news} />}
    </div>
  );
};

export default App;
