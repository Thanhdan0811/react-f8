import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  // useEffect(callback, [deps])

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState(tabs[0]);

  // useEffect(() => {
  //   console.log("Mounted");
  //   document.title = title;
  // });
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  // }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + type)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div>
      <h1>Hello ae F88888</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {tabs.map((tab) => {
        return (
          <button
            onClick={() => setType(tab)}
            style={
              type === tab ? { color: "#FFF", backgroundColor: "#333" } : {}
            }
            key={tab}
          >
            {tab}
          </button>
        );
      })}

      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title || post.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Content;
