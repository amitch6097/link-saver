import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";

export function SaveButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton onClick={onClick} aria-label="add link">
      <SaveIcon />
    </IconButton>
  );
}
