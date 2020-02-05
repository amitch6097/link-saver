import React from "react";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

export function HomeButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton onClick={onClick} aria-label="add link">
      <HomeIcon />
    </IconButton>
  );
}
