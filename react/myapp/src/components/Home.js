import React, { useEffect, useState } from "react";

function Home(props) {
  // let [posts, setPosts] = useState([]);
  let [check, setCheck] = useState(true);

  // useEffect(function () {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(function (res) {
  //       return res.json();
  //     })
  //     .then(function (data) {
  //       setPosts(data);
  //     });
  // }, []);

  let [count, setCount] = useState(0);

  let handleCount = function () {
    setCount(count + 1);
  };

  useEffect(function () {
    console.log("test useEffect");
  }, []);

  return (
    <div>
      <h1>Home Comp</h1>

      {check ? <p>This is Home Comp</p> : ""}

      {count}
      <button onClick={handleCount}> +1 </button>

      {/* {posts.map(function (item) {
        return <p>{item.title}</p>;
      })} */}
    </div>
  );
}

export default Home;
