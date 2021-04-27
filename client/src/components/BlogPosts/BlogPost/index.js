import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function BlogPost({ title, text }) {
  return (
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{text}</Typography>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<DeleteIcon />}
          variant="contained"
          color="secondary">
          Delete
        </Button>
        <Button
          startIcon={<EditIcon />}
          variant="contained"
          color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogPost;