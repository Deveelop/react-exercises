import React, { useState } from "react";
import { PostLists } from "./PostsIndex";

export default function BlogPost() {
  let [index, setIndex] = useState(0);
  const clickHandle = () => {
    setIndex(index + 1);
    if (index >= 2) {
      setIndex(index = 0);
    }
  };
  const clickPrevious =() => {
    setIndex(index - 1);
    if (index <= 0){
        setIndex(index = 0)
    }
  }
  const post = PostLists[index];

  return (
    <div>
      <h2>
        <i>{post.name}</i>
        <br />
        by {post.artist}
      </h2>
      <h3>
        ({index + 1} of {PostLists.length})
      </h3>
      <img src={post.url} alt={post.alt} />
      <p>{post.description}</p>
      <button onClick={clickHandle}>Next</button>
      <button onClick={clickPrevious}>Previous</button>
    </div>
  );
}
