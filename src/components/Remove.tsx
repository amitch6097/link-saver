import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

export function Remove({ onClick }: { onClick: () => void }) {
  return (
    <IconButton onClick={onClick} aria-label="remove link">
      <ClearIcon />
    </IconButton>
  );
}
