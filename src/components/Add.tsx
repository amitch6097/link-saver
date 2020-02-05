import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

export function Add({ onClick }: { onClick: () => void }) {
  return (
    <IconButton onClick={onClick} aria-label="add link">
      <AddIcon />
    </IconButton>
  );
}
