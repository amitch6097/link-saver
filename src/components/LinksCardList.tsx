import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

import { Add } from "../components/Add";
import { LinksCard, ILinksCardConfig} from "./LinksCard";

interface ILinksCardListProps {
    links: Global.ILinks[];
    LinksCardConfig: ILinksCardConfig;
    withAdd: boolean;
    onAdd?: () => void;
    onCardChangeLabel?: (index: number) => (label: string) => void;
    onRemoveCard?: (index: number) => () => void;
    onClickCard?: (id: string) => void;
    label: string;
}

export function LinksCardList({
  links = [],
  onCardChangeLabel = () => () => {},
  onClickCard = () => () => {},
  onRemoveCard = () => () => {},
  onAdd = () => {},
  label = "",
  withAdd = true,
  LinksCardConfig = {} as ILinksCardConfig
}: ILinksCardListProps) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
        <h1>{label}</h1>

    <Grid container direction="row" justify="center" alignItems="center">
      {links.map((link, index) => {
        const onChangeLabel = onCardChangeLabel(index);
        const onRemove = onRemoveCard(index);
        const onClick = () => onClickCard(link.id);
        const onEdit = () => onClickCard(link.id);
        return (
          <LinksCard
            {...LinksCardConfig}
            label={link.label}
            onEdit={onEdit}
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
