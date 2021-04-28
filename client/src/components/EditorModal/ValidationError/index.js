import React from 'react';
import Typography from '@material-ui/core/Typography';

function ValidationError({ children }) {
  return (
    <Typography
      variant="subtitle1"
      color="secondary"
    >
      {children}
    </Typography>
  )
}

export default ValidationError;
