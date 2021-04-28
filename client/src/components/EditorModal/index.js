import React from 'react';
import Modal from '@material-ui/core/Modal';

function EditorModal({ isOpen, handleClose }) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <p>Csooo!</p>
    </Modal>
  )
}

export default EditorModal;
