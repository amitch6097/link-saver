import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import useLinks from "../hooks/useLinks";
import { HomeButton } from "../components/HomeButton";
import { SaveButton } from "../components/SaveButton";
import { LinkRow } from "../components/LinkRow";
export function LinkList() {
  const {
    links,
    label,
    add,
    remove,
    setLabel,
    setLinkLabel,
    setLinkLink
  } = useLinks();

  const onChangeLabel = e => {
    setLabel(e.target.value);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <HomeButton onClick={console.log} />
        <TextField
          id="link-list-title"
          label="Name of Link List"
          value={label}
          variant="outlined"
          onChange={onChangeLabel}
        />{" "}
        <SaveButton onClick={console.log} />
      </Grid>

      {links.map((link, index) => {
        const onAdd = () => add(index);
        const onRemove = () => remove(index);
        const onChangeLinkLink = (link: string) => setLinkLink(index, link);
        const onChangeLinkLabel = (label: string) => setLinkLabel(index, label);
        return (
          <LinkRow
            withRemove={!(links.length === 1)}
            onAdd={onAdd}
            onRemove={onRemove}
            onChangeLabel={onChangeLinkLabel}
            onChangeLink={onChangeLinkLink}
            key={link.id}
            {...link}
          />
        );
      })}
    </Grid>
  );
}
