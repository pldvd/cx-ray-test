import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextInput from './TextInput';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';
import { updatePost, addPost } from '../../redux/actions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem'
  },
  card: {
    flexGrow: 1,
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '5px'
  },
  form: {
    display: 'grid',
    gap: '2rem'
  }
});

function EditorModal({ isOpen, handleClose, title, text, isEditing, id }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { title, text } = values;
    handleClose();

    isEditing
      ? dispatch(updatePost(id, title, text))
      : dispatch(addPost(title, text));
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.container}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box className={classes.card} maxWidth={600}>
        <Formik
          initialValues={{
            title: title || '',
            text: text || ''
          }}
          validationSchema={Yup.object({
            title: Yup.string().required('Title is required.'),
            text: Yup.string().required('Text is required.')
          })}
          onSubmit={handleSubmit}
        >
          <Form className={classes.form}>
            <Typography variant="h6">
              {isEditing ? `Edit Post` : 'Create Post'}
            </Typography>
            <Field
              name="title"
              component={TextInput}
              label="Title"
              variant="standard"
            />
            <Field
              name="text"
              component={TextInput}
              label="Text"
              variant="outlined"
            />
            <Button
              type="submit"
              startIcon={<SaveIcon />}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </Form>
        </Formik>
      </Box>
    </Modal >
  )
}

export default EditorModal;
