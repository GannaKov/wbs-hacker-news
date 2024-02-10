/* eslint-disable react/prop-types */
import TimeAgo from "react-timeago";

const OneNews = ({ item }) => {
  const { title, author, created_at, num_comments } = item;

  return (
    <div>
      <h2>{title}</h2>
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
