import React, { useState } from 'react';
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
      <IconButton color="secondary">
        <AddCircleIcon onClick={openModal} />
      </IconButton>
      <EditorModal
        isOpen={isOpen}
        handleClose={closeModal}
        isEditing={false}
      />
    </div>
  )
}

export default AddPost;
