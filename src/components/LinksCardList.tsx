import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

import { Add } from "../components/Add";
import { LinksCard } from "./LinksCard";

export function LinksCardList({
  links = [],
  onCardChangeLabel = () => () => {},
  onClickCard = () => () => {},
  onRemoveCard = () => () => {},
  onAdd = () => {},
  withRemove = true,
  withAdd = true,
  label = "",
}: {
  links: Global.ILinks[];
  withRemove?: boolean;
  withAdd?: boolean;
  onAdd?: () => void;
  onCardChangeLabel?: (index: number) => (label: string) => void;
  onRemoveCard?: (index: number) => () => void;
  onClickCard?: (index: number) => () => void;
  label: string;
}) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
        <h1>{label}</h1>

    <Grid container direction="row" justify="center" alignItems="center">
      {links.map((link, index) => {
        const onChangeLabel = onCardChangeLabel(index);
        const onRemove = onRemoveCard(index);
        const onClick = onClickCard(index);
        return (
          <LinksCard
            label={link.label}
            withRemove={withRemove}
            onClick={onClick}
            onRemove={onRemove}
            onChangeLabel={onChangeLabel}
          />
        );
      })}
      {withAdd && <Add onClick={onAdd} />}
    </Grid>
    </Grid>

  );
}
