import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    width: '100%'
  }
});

function TextInput() {
  const classes = useStyles();

  return <TextField
    label="Text"
    variant="outlined"
    className={classes.input}
  />;
}

export default TextInput;
