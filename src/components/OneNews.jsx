/* eslint-disable react/prop-types */

const OneNews = ({ item }) => {
  const { title, author, created_at, num_comments } = item;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <p>{author}</p>
        <p>{created_at}</p>
        <p>{num_comments}</p>
      </div>
      ;
    </div>
  );
};

export default OneNews;
