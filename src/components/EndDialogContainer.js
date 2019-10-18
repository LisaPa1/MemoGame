import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const EndDialog = ({ open }) => {

  return (
    <Dialog open={open}>
      <DialogTitle>
        Great!
      </DialogTitle>
    </Dialog>
  )
}

export default EndDialog;