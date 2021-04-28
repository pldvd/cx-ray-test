import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { ErrorMessage } from 'formik';
import Box from '@material-ui/core/Box';
import ValidationError from '../ValidationError';

const useStyles = makeStyles({
  input: {
    width: '100%'
  }
});

/*
Field and form props are provided by Formik's Field component: https://formik.org/docs/api/field
*/

function TextInput({ field, form }) {
  const classes = useStyles();
  
  const handleChange = e => {
    form.setFieldTouched(field.name, true);
    form.setFieldValue(field.name, e.target.value);
  };

  return (
    <Box>
      <TextField
        label="Text"
        variant="outlined"
        className={classes.input}
        value={field.value}
        onChange={handleChange}
      />
      <ErrorMessage name={field.name} component={ValidationError} />
    </Box>
  );
}

export default TextInput;
