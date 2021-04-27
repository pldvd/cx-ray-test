import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loader() {

  /*
  For some weird reason, the Backdrop component has a lower z-index than the Card component, here we apply a little inline quick fix. Since I couldn't find anything in the official documentation, I will just add an arbitrary number that is higher than the ones listed in the official repo:
  https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/zIndex.js
  */
  return (
    <Backdrop open style={{ zIndex: 2000 }}>
      <CircularProgress color="primary" />
    </Backdrop>
  )
}

export default Loader;
