import React, { useState } from "react";

const Post = ({ text }) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div style={{ marginBottom: "10px" }}>
      <p>{text}</p>
      <button onClick={() => setLike(like + 1)}>😘{like}</button>
      <button onClick={() => setDislike(dislike + 1)}>😵{dislike}</button>
    </div>
  );
};

const LikeDislike = () => {
  const posts = [
    "Học ReactJS có khó không?",
    "Props và State là gì?",
    "Lập trình web có vui không?"
  ];

  return (
    <div>
      <h2>Bài 4: Like/Dislike Post</h2>
      {posts.map((p, idx) => (
        <Post key={idx} text={p} />
      ))}
    </div>
  );
};

export default LikeDislike;