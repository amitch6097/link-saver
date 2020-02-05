import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

import { Add } from "../components/Add";
import { Remove } from "../components/Remove";

export function LinkRow({
  label,
  link,
  onChangeLabel,
  onChangeLink,
  onAdd,
  onRemove,
  withRemove
}: {
  link: string;
  label: string;
  withRemove: boolean;
  onChangeLabel: (label: string) => void;
  onChangeLink: (link: string) => void;
  onAdd: () => void;
  onRemove: () => void;
}) {
  const changeLabel = e => {
    onChangeLabel(e.target.value);
  };

  const changeLink = e => {
    onChangeLink(e.target.value);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <TextField
        id="outlined-helperText"
        label="Display"
        value={label}
        onChange={changeLabel}
        variant="outlined"
      />
      <TextField
        id="outlined-helperText"
        label="Link"
        value={link}
        onChange={changeLink}
        variant="outlined"
      />

      <Add onClick={onAdd} />
      {withRemove && <Remove onClick={onRemove} />}
    </Grid>
  );
}
