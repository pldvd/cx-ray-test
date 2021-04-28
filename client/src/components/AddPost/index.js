import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditorModal from '../EditorModal';

function AddPost() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Tooltip title="Add Post">
        <IconButton color="secondary">
          <AddCircleIcon onClick={openModal} />
        </IconButton>
      </Tooltip>
      <EditorModal
        isOpen={isOpen}
        handleClose={closeModal}
        isEditing={false}
      />
    </div>
  )
}

export default AddPost;
