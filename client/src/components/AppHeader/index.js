import React from 'react';
import { Typography } from '@material-ui/core';

function AppHeader({text}) {
  return <Typography variant="h1">{text}</Typography>;
}

export default AppHeader;
