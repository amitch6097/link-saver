import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import CircularProgress from '@material-ui/core/CircularProgress';


export function SaveButton({ onClick, saving = false }: { onClick: () => void , saving?: boolean}) {
  return (
      <>
    <IconButton onClick={onClick} aria-label="add link">
      <SaveIcon />
    </IconButton>
    {saving && <CircularProgress size={68} />}
    </>
  );
}
