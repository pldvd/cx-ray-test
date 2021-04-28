import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    width: '100%'
  }
});

/*
Field and form props are provided by Formik's Field component: https://formik.org/docs/api/field
*/

function TitleInput({ field, form }) {
  const classes = useStyles();

  return <TextField
    label="Title"
    variant="standard"
    className={classes.input}
    value={field.value}
    onChange={e => form.setFieldValue(field.name, e.target.value)}
  />;
}

export default TitleInput;
