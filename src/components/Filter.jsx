/* eslint-disable react/prop-types */
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useStateContext } from "../Context";
import { useEffect, useState } from "react";

const tags = [
  "all",
  "history",
  "american",
  "crime",
  "french",
  "fiction",
  "english",
  "magical",
  "mystery",
  "love",
  "classic",
];

function Filter(props) {
  // useEffect(() => {
  //     fetch("https://dummyjson.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const tags = new Set();  ///exista si conceptul de new Map()
  //         data.posts.forEach((post) => {
  //           post.tags.forEach((tag) => tags.add(tag));
  //         });
  //         console.log(tags);
  //       });
  //   }, []);

  //Request-ul de mai sus este un hack :) el ne returneaza array-ul de la linia 4.
  const { posts, setDisplayPosts } =
    useStateContext();
  const [value, setValue] = useState("all");
  useEffect(() => {
    if (props.reset) {
      setValue("all");
    }
  }, [props.reset]);
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "all") {
      setDisplayPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) =>
        post.tags.includes(event.target.value)
      );
      setDisplayPosts(filteredPosts);
    }
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        Genre
      </FormLabel>
      <RadioGroup
        value={value}
        onChange={handleChange}
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        {tags.map((tag) => (
          <FormControlLabel
            value={tag}
            control={<Radio name={tag} />}
            label={tag}
            key={tag}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default Filter;
