/* eslint-disable react/prop-types */

import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStateContext } from '../Context';

function ReactionsButton(props) {
  const { posts, setPosts } = useStateContext();

  const handleClick = async () => {
    const res = await fetch(`https://dummyjson.com/posts/${props.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reactions: props.reactions + 1,
      }),
    });
    const data = await res.json();
    const newArray = posts.map(post => (post.id === props.id ? data : post));
    setPosts(newArray);
  };

  return (
    <Button
      size="small"
      onClick={handleClick}>
      {props.reactions}

      <FavoriteIcon />
    </Button>
  );
}

export default ReactionsButton;
