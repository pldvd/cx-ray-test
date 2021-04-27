import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlogPost from './BlogPost';
import Box from '@material-ui/core/Box';
import { fetchPosts } from '../../redux/actions';

function BlogPosts() {
  const dispatch = useDispatch();
  const posts = useSelector(store => store.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Box>
      {posts.map(post => (
        <BlogPost
          key={post._id}
          id={post._id}
          title={post.title}
          text={post.text} />
      ))}
    </Box>
  )
}

export default BlogPosts;
