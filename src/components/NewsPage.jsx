/* eslint-disable react/prop-types */
import OneNews from "./OneNews";

const NewsPage = ({ news }) => {
  return (
    <div>
      <ul>
        {news.map((item) => (
          <li key={item.story_id}>
            <OneNews item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
