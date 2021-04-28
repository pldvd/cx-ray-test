import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import BlogPost from './BlogPost';
import Box from '@material-ui/core/Box';
import { fetchPosts } from '../../redux/actions';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: "grid",
    gap: "2rem",
    marginTop: "2rem"
  }
});

function BlogPosts() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const posts = useSelector(store => store.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Box className={classes.root}>
      {
        posts.length === 0
          ? <Typography variant="body1">To add posts, please click on the plus icon next to the header ☝️</Typography>
          : posts.map(post => (
            <BlogPost
              key={post._id}
              id={post._id}
              title={post.title}
              text={post.text} />
          ))
      }
    </Box>
  )
}

export default BlogPosts;
