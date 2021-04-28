import React from 'react';
import { Formik, Field, Form } from 'formik';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextInput from './TextInput';
import TitleInput from './TitleInput';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

function EditorModal({ isOpen, handleClose, title, text, isEditing }) {
  const classes = useStyles();

  const handleSubmit = () => {
    console.log('Hellow world!');
  }

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
          onSubmit={handleSubmit}
        >
          <Form className={classes.form}>
            <Typography variant="h6">
              {isEditing ? `Edit Post` : 'Create Post'}
            </Typography>
            <Field name="title" component={TitleInput} />
            <Field name="text" component={TextInput} />
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
