import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const CustomDialog = ({ isOpen, onClose, heading, label, type }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setValue("");
        onClose(null);
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>{heading}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="dialog-text"
          label={label}
          type={type}
          fullWidth
          variant="standard"
          value={value}
          onChange={handleOnChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setValue("");
            onClose(null);
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onClose(value);
            setValue("");
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
