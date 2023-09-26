/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const PostsContext = createContext();  //Part 1 - creaza contextul (initial gol). !!!! Se defineste cu litera mare! 

export function StateContext(props) {  //Part 2 - populeaza contextul de mai sus cu date si ne creaza un HOC = Higher Order Component
  const [posts, setPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState([]);
  return (
    <PostsContext.Provider value={{ posts, setPosts, displayPosts, setDisplayPosts }}>
      {props.children}
    </PostsContext.Provider>
  );
}

export const useStateContext = () => useContext(PostsContext);  //Denumirea "useStateContext" este aleasa de noi
