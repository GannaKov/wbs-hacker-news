/* eslint-disable react/prop-types */
import Pagination from "@mui/material/Pagination";
import styles from "../styles/NewsPage.module.css";
import OneNews from "./OneNews";

const NewsPage = ({ news, page, setPage, allPages, allNews }) => {
  //   const { hits, nbHits, nbPages } = news;
  const handleChange = (event, value) => {
    setPage(value - 1);
  };

  return (
    <div className={styles.newsSection}>
      <p className={styles.resultsText}>{allNews} results</p>

      <div className={styles.newsListWrp}>
        <ul className={styles.newsList}>
          {news.map((item) => (
            <li key={item.story_id} className={styles.newsCard}>
              <OneNews item={item} />
            </li>
          ))}
        </ul>
        <Pagination
          count={allPages}
          // defaultPage={6}
          // boundaryCount={2}
          page={page + 1}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default NewsPage;
