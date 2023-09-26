import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

import ReactionsButton from "./ReactionsButton";
import { URL } from "../App";
import { useStateContext } from "../Context";
import Filter from "./Filter";

function Posts() {
  const {
    posts,
    setPosts,
    displayPosts,
    setDisplayPosts,
  } = useStateContext(); //destructurare
  // const contextValue = useStateContext();
  // contextValue.posts, contextValue.setPosts()
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json()) // rezultatul de la fetch(Url)
      .then((data) => {
        setDisplayPosts(data.posts);
        setPosts(data.posts);
      }); // posts nu e de la useState. Este Key obiectului de la fetch
    //   .then((data) => console.log(data)); // rezultatul de la res.json
  }, [setPosts, setDisplayPosts]);
  const handleClick = async () => {
    setLoading(true);
    const res = await fetch(
      `${URL}&skip=${posts.length}`
    );
    const data = await res.json();
    setPosts([...posts, ...data.posts]); // prin ... posts varsam primele 5 postari in posts
    setDisplayPosts([...posts, ...data.posts]);
    setLoading(false);
  };

  return (
    <>
      <Filter reset={loading} />
      {displayPosts.map((post) => (
        <Card
          key={post.id}
          className="posts-container"
        >
          <CardContent>
            <Typography variant="h5">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <ReactionsButton
              reactions={post.reactions}
              id={post.id}
            />
          </CardActions>
        </Card>
      ))}
      <Button
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Loading" : "Load more"}
      </Button>
    </>
  );
}

export default Posts;
