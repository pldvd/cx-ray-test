import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loader() {
  return (
    <Backdrop open>
      <CircularProgress color="primary" />
    </Backdrop>
  )
}

export default Loader;
