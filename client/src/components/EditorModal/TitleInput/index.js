import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    width: '100%'
  }
});

function TitleInput() {
  const classes = useStyles();

  return <TextField
    label="Title"
    variant="standard"
    className={classes.input}
  />;
}

export default TitleInput;
