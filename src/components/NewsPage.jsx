/* eslint-disable react/prop-types */
import Pagination from "@mui/material/Pagination";
import styles from "../styles/NewsPage.module.css";
import OneNews from "./OneNews";

const NewsPage = ({ news, page, setPage }) => {
  const { hits, nbHits, nbPages } = news;
  const handleChange = (event, value) => {
    setPage(value - 1);
  };

  return (
    <div>
      <p>{nbHits} results</p>
      {hits && hits.length > 0 ? (
        <div className={styles.newsListWrp}>
          <ul className={styles.newsList}>
            {hits.map((item) => (
              <li key={item.story_id}>
                <OneNews item={item} />
              </li>
            ))}
          </ul>
          <Pagination
            count={nbPages}
            // defaultPage={6}
            // boundaryCount={2}
            page={page + 1}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      ) : (
        <p>There is no news for this request</p>
      )}
    </div>
  );
};

export default NewsPage;
