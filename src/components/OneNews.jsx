/* eslint-disable react/prop-types */
import TimeAgo from "react-timeago";
import styles from "../styles/OneNews.module.css";

const OneNews = ({ item }) => {
  const { title, author, created_at, num_comments, url } = item;

  return (
    <div>
      <a
        className={styles.newsLink}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <div>
        <p>author: {author}</p>
        {/* <p>date: {created_at}</p> */}
        <TimeAgo date={created_at} />
        <p>comments: {num_comments}</p>
      </div>
    </div>
  );
};

export default OneNews;
