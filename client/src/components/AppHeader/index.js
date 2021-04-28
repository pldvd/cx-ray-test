import React from 'react';
import { Typography } from '@material-ui/core';
import AddPost from '../AddPost';

function AppHeader({ text }) {
  return (
    <div style={{display: 'flex'}}>
      <Typography variant="h1">{text}</Typography>
      <AddPost />
    </div>
  );
}

export default AppHeader;
