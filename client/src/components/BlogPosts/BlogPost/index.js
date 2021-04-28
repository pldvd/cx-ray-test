import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletePost } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import EditorModal from '../../EditorModal';

function BlogPost({ title, text, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  const openModal = () => {
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Card>
      <EditorModal
        isOpen={isOpen}
        handleClose={closeModal}
        title={title}
        text={text}
        isEditing={true}
        id={id}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={openModal}
          startIcon={<EditIcon />}
          variant="contained"
          color="primary"
        >
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          startIcon={<DeleteIcon />}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogPost;
